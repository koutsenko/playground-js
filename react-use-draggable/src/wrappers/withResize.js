import styles from "./withResize.module.css";

import cn from "classnames";
import React, { useEffect, useRef } from "react";

import { consumeBlockContext } from "../context/Block";
import useDraggable from "../hooks/Draggable";
import { rotateDot } from "../util/CSSMath";

const options = { stopPropagation: true };

/**
 * Получение сдвига точки ханлера ресайза.
 */
const getPinnedShift = (center, centerResized, blockData, direction) => {
  const {
    position: { x, y },
    rotation,
  } = blockData;

  const point1 = rotateDot(center, [x, y], rotation);
  const point2 = rotateDot(centerResized, [x, y], rotation);

  const [dx, dy] = [point2[0] - point1[0], point2[1] - point1[1]];

  return [dx, dy];
};

/**
 * Вычисление изменения ширины и высоты элемента в результате ресайза.
 */
const getDWH = (direction, rotatedOffset, blockData) => {
  const { position, width, height } = blockData;
  const dw = ["se", "e", "ne"].includes(direction)
    ? rotatedOffset[0] - (position.x + width)
    : ["sw", "w", "nw"].includes(direction)
    ? -(rotatedOffset[0] - position.x)
    : 0;
  const dh = ["se", "s", "sw"].includes(direction)
    ? rotatedOffset[1] - (position.y + height)
    : ["nw", "n", "ne"].includes(direction)
    ? -(rotatedOffset[1] - position.y)
    : 0;

  return [dw, dh];
};

/**
 * Получение координат смещенного после ресайза центра.
 */
const getCenterResized = (center, direction, dw, dh) =>
  direction === "e"
    ? [center[0] + dw / 2, center[1]]
    : direction === "w"
    ? [center[0] - dw / 2, center[1]]
    : direction === "s"
    ? [center[0], center[1] + dh / 2]
    : direction === "n"
    ? [center[0], center[1] - dh / 2]
    : direction === "nw"
    ? [center[0] - dw / 2, center[1] - dh / 2]
    : direction === "ne"
    ? [center[0] + dw / 2, center[1] - dh / 2]
    : direction === "sw"
    ? [center[0] - dw / 2, center[1] + dh / 2]
    : direction === "se"
    ? [center[0] + dw / 2, center[1] + dh / 2]
    : null;

/**
 * Вычисление новой (и неповернутой!) координаты левой верхней точки примитива.
 */
const getNextPosition = (direction, position, dx, dy, dw, dh) => ({
  x: position.x - dx - (["nw", "w", "sw"].includes(direction) ? dw : 0),
  y: position.y - dy - (["nw", "n", "ne"].includes(direction) ? dh : 0),
});

/**
 * Преобразование высоты, ширины и координат во время ресайза.
 */
const transformBlock = (direction, data, blockData) => {
  const { rotation, position, width, height } = blockData;
  const { x, y } = position;

  // Геометрический центр фигуры до ресайза.
  const center = [x + width / 2, y + height / 2];

  // Вычисляем новую позицию хандлера ресайза в "неповернутой" системе координат.
  const rotatedOffset = rotateDot(center, [data.x, data.y], -rotation);

  // Вычисляем насколько меняются ширина и высота элемента вследствие ресайза.
  const [dw, dh] = getDWH(direction, rotatedOffset, blockData);

  // Геометрический центр фигуры после ресайза.
  const centerResized = getCenterResized(center, direction, dw, dh);

  // Изменение координаты (движение хандлера + поправка на фикс повернутого уголка противоположного хандлеру).
  const [dx, dy] = getPinnedShift(center, centerResized, blockData, direction);

  // Итоговая новая координата (x, y) верхней левой точки фигуры.
  const nextPosition = getNextPosition(direction, position, dx, dy, dw, dh);

  return {
    ...blockData,
    ...(["sw", "se", "ne", "nw", "n", "s"].includes(direction) && {
      height: height + dh,
    }),
    ...(["sw", "se", "ne", "nw", "e", "w"].includes(direction) && {
      width: width + dw,
    }),
    position: nextPosition,
  };
};

const PureComponentWithResize = (props) => {
  const { contextData, pageRef, WrappedComponent } = props;
  const { blockData, setBlockData } = contextData;

  /* Северные */

  const refNW = useRef(null);
  const localStateNW = useDraggable(refNW, pageRef, options);
  useEffect(() => {
    const { action, data } = localStateNW;
    if (action === "drag") {
      setBlockData(transformBlock("nw", data, blockData));
    }
  }, [localStateNW]); // eslint-disable-line react-hooks/exhaustive-deps

  const refN = useRef(null);
  const localStateN = useDraggable(refN, pageRef, options);
  useEffect(() => {
    const { action, data } = localStateN;
    if (action === "drag") {
      setBlockData(transformBlock("n", data, blockData));
    }
  }, [localStateN]); // eslint-disable-line react-hooks/exhaustive-deps

  const refNE = useRef(null);
  const localStateNE = useDraggable(refNE, pageRef, options);
  useEffect(() => {
    const { action, data } = localStateNE;
    if (action === "drag") {
      setBlockData(transformBlock("ne", data, blockData));
    }
  }, [localStateNE]); // eslint-disable-line react-hooks/exhaustive-deps

  /* Средние */

  const refMW = useRef(null);
  const localStateMW = useDraggable(refMW, pageRef, options);
  useEffect(() => {
    const { action, data } = localStateMW;
    if (action === "drag") {
      setBlockData(transformBlock("w", data, blockData));
    }
  }, [localStateMW]); // eslint-disable-line react-hooks/exhaustive-deps

  const refME = useRef(null);
  const localStateME = useDraggable(refME, pageRef, options);
  useEffect(() => {
    const { action, data } = localStateME;
    if (action === "drag") {
      setBlockData(transformBlock("e", data, blockData));
    }
  }, [localStateME]); // eslint-disable-line react-hooks/exhaustive-deps

  /* Южные */

  const refSW = useRef(null);
  const localStateSW = useDraggable(refSW, pageRef, options);
  useEffect(() => {
    const { action, data } = localStateSW;
    if (action === "drag") {
      setBlockData(transformBlock("sw", data, blockData));
    }
  }, [localStateSW]); // eslint-disable-line react-hooks/exhaustive-deps

  const refS = useRef(null);
  const localStateS = useDraggable(refS, pageRef, options);
  useEffect(() => {
    const { action, data } = localStateS;
    if (action === "drag") {
      setBlockData(transformBlock("s", data, blockData));
    }
  }, [localStateS]); // eslint-disable-line react-hooks/exhaustive-deps

  const refSE = useRef(null);
  const localStateSE = useDraggable(refSE, pageRef, options);
  useEffect(() => {
    const { action, data } = localStateSE;
    if (action === "drag") {
      setBlockData(transformBlock("se", data, blockData));
    }
  }, [localStateSE]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WrappedComponent {...props}>
      <div className={styles.resizeHandlers}>
        {/* Северные */}
        <div
          className={cn(styles.handler, styles.northWest)}
          draggable="true"
          ref={refNW}
        />
        <div
          className={cn(styles.handler, styles.north)}
          draggable="true"
          ref={refN}
        />
        <div
          className={cn(styles.handler, styles.northEast)}
          draggable="true"
          ref={refNE}
        />
        {/* Средние */}
        <div
          className={cn(styles.handler, styles.middleWest)}
          draggable="true"
          ref={refMW}
        />
        <div
          className={cn(styles.handler, styles.middleEast)}
          draggable="true"
          ref={refME}
        />
        {/* Южные */}
        <div
          className={cn(styles.handler, styles.southWest)}
          draggable="true"
          ref={refSW}
        />
        <div
          className={cn(styles.handler, styles.south)}
          draggable="true"
          ref={refS}
        />
        <div
          className={cn(styles.handler, styles.southEast)}
          draggable="true"
          ref={refSE}
        />
      </div>
    </WrappedComponent>
  );
};

const ComponentWithResize = ((Comp) => {
  Comp = consumeBlockContext(Comp);

  return Comp;
})(PureComponentWithResize);

const withResize = (WrappedComponent) => (props) => (
  <ComponentWithResize {...{ ...props, WrappedComponent }} />
);

export default withResize;
