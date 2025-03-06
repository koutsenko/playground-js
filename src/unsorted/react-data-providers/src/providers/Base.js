/**
 * Абстрактный базовый провайдер данных:
 * - предоставляет доступ к данным
 * - поддерживает автозагрузку данных для нее и метод загрузки в т.ч. с опциями
 * - поддерживает передачу параметров в методы автозагрузки и загрузки
 * - не может использоваться как есть, нужно написать задействующую его реализацию
 *
 * Провайдеры-наследники:
 * - должны предоставить __contextData, как минимум вида: { data, actions: { loadData }}
 * - размещают в data что угодно. Могут добавлять другие методы в actions (наряду с loadData)
 * - помимо  actions и data, могут передать __contextData и другие поля - они также буду доступны потребителю
 *
 * TODO:
 * - поддержка единственного провайдера (для предотвращения коллизий)
 * - поддержка renderNothing для консумера (т.е. пока не загрузятся данные)
 * - поддержка старых данных в сторе (для этого надо сохранять опции с которыми они были загружены)
 * - сделать отслеживание смены location опциональным
 *
 * FIXME:
 * - провайдеры-реализации вынуждены прокидывать инфу в базовый через пропсы и резервируют __contextData и __contextSettings
 */

import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Loading from 'common/components/Loading';

const isset = value => value === true || (value !== null && typeof value === 'object');

/**
 * Название свойства, в котором провайдер-реализация передает данные базовому.
 * Если на одной странице несколько провайдеров, нужно задать им разные dataField.
 */
const defaultDataField = 'contextData';

const failSafeCtx = {
  __contextData: {
    actions: {
      loadData: () => console.error('Seems no context provided'),
    },
  },
  mountCb: () => console.error('Seems no context provided'),
  umountCb: () => console.error('Seems no context provided'),
};

/**
 * Фабричный метод для создания консумера контекста.
 */
const buildContextConsumer = Context => (Comp, dataField = defaultDataField) => props => {
  const ctx = useContext(Context);
  const { __contextData, mountCb, umountCb } = ctx || failSafeCtx;

  useEffect(() => {
    mountCb();

    return () => umountCb();
  }, []);

  return <Comp {...{ ...props, [dataField]: __contextData }} />;
};

/**
 * HOC, содержащий общий для всех провайдеров контекста функционал.
 */
const provideBaseContext = (Comp, options = {}, Context) => ({ __contextData, __contextSettings, ...props }) => {
  const { autoload } = options;
  const { isDataAlreadyInStore = () => false, isPending = () => false } = __contextSettings;
  const location = useLocation();
  const [dataLoadRequested, setDataLoadRequested] = useState(false);
  const [consumerCount, setConsumerCount] = useState(0);
  const pending = isPending();

  const mountCb = () => {
    setConsumerCount(c => c + 1);

    if (isset(autoload)) {
      setDataLoadRequested(autoload);
    }
  };

  const umountCb = () => {
    setConsumerCount(c => c - 1);
  };

  /**
   * Эффект с автозагрузкой данных по маунту потребителя или по смене location.
   * Если в autoload содержится просто true, то это не является параметром для экшена загрузки.
   */
  useEffect(() => {
    if (!isDataAlreadyInStore() && dataLoadRequested && consumerCount > 0) {
      __contextData.actions.loadData(autoload === true ? undefined : autoload);
    }
  }, [dataLoadRequested, location]);

  /**
   * FIXME если провайдеров будет несколько, будет наслоение индикаторов загрузки.
   */
  return (
    <Context.Provider value={{ mountCb, umountCb, __contextData }}>
      <Comp {...props} />
      {pending && consumerCount > 0 && <Loading />}
    </Context.Provider>
  );
};

export { provideBaseContext, buildContextConsumer };
