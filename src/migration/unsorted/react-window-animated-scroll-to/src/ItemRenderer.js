import React, { memo } from 'react';

const ItemRenderer = memo(({ style, index }) => (
  <div
    className="Row"
    style={{
      ...style,
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid #ddd',
      padding: '0 0.5em',
    }}
  >
    Row {index}
  </div>
));

export default ItemRenderer;
