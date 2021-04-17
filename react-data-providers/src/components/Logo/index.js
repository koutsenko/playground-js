import React from 'react';

import logo from 'assets/logo.svg';

import styles from './index.module.css';

function Logo() {
  return <img src={logo} className={styles.logo} alt="logo" />;
}

export default Logo;
