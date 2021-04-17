import styles from "./index.module.css";

import React from "react";
import { consumeBlockContext } from "../../context/Block";

const PureBlock = (props) => {
  const { children, elementRef, contextData } = props;
  const { blockData } = contextData;
  const { position, rotation, width, height } = blockData;

  return (
    <div
      draggable="true"
      ref={elementRef}
      className={styles.blockContainer}
      style={{
        left: position.x,
        top: position.y,
        width,
        height,
        ...(rotation !== 0 && { transform: `rotate(${rotation}deg)` }),
      }}
    >
      <div>Block</div>
      {children}
    </div>
  );
};

const Block = ((Comp) => {
  Comp = consumeBlockContext(Comp);

  return Comp;
})(PureBlock);

export default Block;
