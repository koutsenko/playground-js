import React from 'react';

import styles from './index.module.css';

function Page({ children }) {
  return <div className={styles.page}>{children}</div>;
}

export default Page;
