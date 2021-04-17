import styles from "./index.module.css";

import React from "react";

const Page = ({ children, pageRef }) => (
  <div ref={pageRef} className={styles.page}>
    {children}
  </div>
);

export default Page;
