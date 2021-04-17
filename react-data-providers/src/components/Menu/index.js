import React from 'react';
import { Link } from 'react-router-dom';

import * as Urls from 'constants/Urls';

import styles from './index.module.css';

function Menu() {
  return (
    <aside className={styles.menu}>
      <ul>
        <li>
          <Link to={Urls.URL_MAIN}>Главная</Link>
        </li>
        <li>
          <Link to={Urls.URL_DOCLIST}>Список документов</Link>
        </li>
        <li>
          <Link to={Urls.URL_DOCSEARCH}>Поиск документов</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Menu;
