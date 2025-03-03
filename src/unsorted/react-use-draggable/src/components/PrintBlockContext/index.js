import styles from "./index.module.css";

import React from "react";

import { consumeBlockContext } from "../../context/Block";

const PurePrintBlockContext = (props) => {
  const { contextData } = props;
  const { blockData } = contextData;

  return (
    <span className={styles.debug}>{JSON.stringify(blockData, null, 2)}</span>
  );
};

const PrintBlockContext = ((Comp) => {
  Comp = consumeBlockContext(Comp);

  return Comp;
})(PurePrintBlockContext);

export default PrintBlockContext;
