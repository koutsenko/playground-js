import React, {
  forwardRef,
  useEffect,
  useCallback,
  useRef,
  useState,
} from "react";
import { FixedSizeList } from "react-window";
import throttle from "lodash.throttle";

import Row from "../Row";

import "./index.css";

const ListResizeable = forwardRef(({ data }, ref) => {
  const containerRef = useRef();
  const [dim, setDim] = useState([0, 0]);

  const itemData = data.allIds.map((id) => data.byId[id]);

  const updateDim = () => {
    const rect = containerRef.current.getBoundingClientRect();
    const { width, height } = rect;

    setDim([width, height]);
  };

  const throttledUpdateDim = useCallback(throttle(updateDim, 500));

  useEffect(() => {
    updateDim();

    window.addEventListener("resize", throttledUpdateDim);

    return () => {
      window.removeEventListener("resize", throttledUpdateDim);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ListResizeable-container" ref={containerRef}>
      <FixedSizeList
        itemData={itemData}
        itemSize={30}
        itemCount={data.allIds.length}
        ref={ref}
        width={dim[0]}
        height={dim[1]}
      >
        {Row}
      </FixedSizeList>
    </div>
  );
});

export default ListResizeable;
