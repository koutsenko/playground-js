import React from "react";
import { FixedSizeList } from "react-window";

import Row from "../Row";

import "./index.css";

const List = ({ data }) => {
  const itemData = data.allIds.map((id) => data.byId[id]);

  return (
    <div className="List-container">
      <FixedSizeList
        itemData={itemData}
        itemSize={30}
        itemCount={data.allIds.length}
        width={300}
        height={400}
      >
        {Row}
      </FixedSizeList>
    </div>
  );
};

export default List;
