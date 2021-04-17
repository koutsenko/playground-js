/**
 * Контекст с данными блока.
 * А именно, его координаты и свойства типа rotation.
 * Они рендерятся блоком и модифицируются обертками withDragDrop и т.п.
 *
 * Для шареного (хозяином, компонентом и его обертками) доступа был выбран контекст.
 * Конечно можно было бы взять redux, но это из пушек по воробьям.
 */

import React, { useState } from "react";

const defaultData = {
  position: { x: 20, y: 20 },
  rotation: 0,
  width: 100,
  height: 60,
};

const BlockContext = React.createContext(defaultData);

const provideBlockContext = (WrappedComponent) => (props) => {
  const [blockData, setBlockData] = useState(defaultData);

  return (
    <BlockContext.Provider value={{ blockData, setBlockData }}>
      <WrappedComponent {...props} />
    </BlockContext.Provider>
  );
};

const consumeBlockContext = (WrappedComponent, name = "contextData") => (
  props
) => {
  return (
    <BlockContext.Consumer>
      {(value) => <WrappedComponent {...{ ...props, [name]: value }} />}
    </BlockContext.Consumer>
  );
};

export { provideBlockContext, consumeBlockContext };
