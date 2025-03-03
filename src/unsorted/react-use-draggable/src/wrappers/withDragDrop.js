import React, { useEffect } from "react";

import useDraggable from "../hooks/Draggable";
import { consumeBlockContext } from "../context/Block";

const PureComponentWithDragDrop = (props) => {
  const { WrappedComponent, contextData, elementRef, pageRef } = props;
  const localState = useDraggable(elementRef, pageRef);

  useEffect(() => {
    console.log("DragDrop localState: ", JSON.stringify(localState));
    // console.log("contextData.blockData: ", JSON.stringify(contextData.blockData));

    if (localState.action === "drag") {
      contextData.setBlockData((prevBlockData) => ({
        ...prevBlockData,
        position: localState.data,
      }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localState]);

  return <WrappedComponent {...props} />;
};

const ComponentWithDragDrop = ((Comp) => {
  Comp = consumeBlockContext(Comp);

  return Comp;
})(PureComponentWithDragDrop);

const withDragDrop = (WrappedComponent) => (props) => (
  <ComponentWithDragDrop {...{ ...props, WrappedComponent }} />
);

export default withDragDrop;
