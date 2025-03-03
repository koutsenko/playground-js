import React from 'react';

import styles from './index.module.css';

function Content({ children }) {
  return (
    <section className={styles['content-container']}>
      <div className={styles.content}>{children}</div>
    </section>
  );
}

export default Content;
