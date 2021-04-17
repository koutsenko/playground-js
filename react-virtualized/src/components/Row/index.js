import React from "react";

const Row = ({ data, index, style }) => (
  <div style={style}>
    <span
      style={{
        display: "inline-block",
        width: "100%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {index} {data[index]}
    </span>
  </div>
);

export default Row;
