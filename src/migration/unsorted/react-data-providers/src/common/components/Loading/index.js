import cn from 'classnames';
import React, { useEffect, useState } from 'react';

import img from 'common/assets/media/unsorted/loading.svg';

import styles from './index.module.scss';

const defaultText = 'Идет загрузка страницы';

/**
 * Сложный индикатор загрузки, состоит из
 * - затеняющей маски на весь экран (плавная, на секундной задержке не успеет моргнуть)
 * - анимированного спиннера в центре экрана
 * - текстом рядом со спиннером (дефолтным или заданным)
 *
 * Хорош для использования на странице, где загружается основной блок данных.
 */
const Loading = ({ loading = null }) => {
  const isLite = loading !== null && loading.lite;
  const text = loading === null || loading.text === undefined ? defaultText : loading.text;
  const [loaderBackground, setLoaderBackground] = useState(false);

  useEffect(() => {
    setLoaderBackground(true);
  }, []);

  return (
    <div
      className={cn(styles.loader, {
        [styles.loaderLite]: isLite,
        [styles.loaderBackground]: loaderBackground,
      })}
    >
      <div className={styles.loaderContent}>
        <img src={img} className={styles.img} />
        <span className={styles.loadingText}>{text}</span>
      </div>
    </div>
  );
};

export default Loading;
