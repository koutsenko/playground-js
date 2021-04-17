import { useState, useEffect } from "react";
import { useEvent } from "react-use";

import { getCenter, getRotation, rotateDot } from "../../util/CSSMath";

const useDraggable = (outerRef, parentRef, options = {}) => {
  const [, forceUpdate] = useState();
  const [state, setState] = useState({});
  const [dragImage, setDragImage] = useState(null);
  const [prevXY, setPrevXY] = useState([0, 0]);
  const [clickOffset, setClickOffset] = useState([0, 0]);
  const [parentXY, setParentXY] = useState([0, 0]);
  const {
    noDragImage = true, // Сокрытие HTML5 drag image. Дефолтная копия полупрозрачная и игнорирует св-ва оригинала (например поворот).
    filterMove = true, // Не генерировать drag события, если не менялись координаты. Оптимизация производительности.
    stopPropagation = false, // Все обработчики - перехватывающие? Применять только в случае наслоения логики.
  } = options;

  /**
   * Абсолютная позиция parentRef в вьюпорте является нулем в системе координат.
   * Возвращаемая во время drag-n-drop координата (x, y) отсчитывается от нее.
   */
  useEffect(() => {
    if (!parentRef.current) {
      return;
    }

    const rect = parentRef.current.getBoundingClientRect();
    const nextParentXY = [rect.left, rect.top];

    setParentXY(nextParentXY);
  }, [parentRef]);

  useEffect(() => forceUpdate({}), [outerRef]);

  useEffect(() => {
    if (noDragImage) {
      const image = document.createElement("img");
      image.src = "blank.png";
      image.width = 100;
      image.src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

      setDragImage(image);
    }
  }, [noDragImage]);

  const handlePointerDown = (event) => {
    if (stopPropagation) {
      event.stopPropagation();
    }

    setState({ action: "pointerdown" });
  };

  /**
   * Note: if drag event occurs, pointerup will not be called, check for dragend event instead.
   */
  const handlePointerUp = (event) => {
    if (stopPropagation) {
      event.stopPropagation();
    }

    setState({ action: "pointerup" });
  };

  const handleDragStart = (event) => {
    if (stopPropagation) {
      event.stopPropagation();
    }

    if (noDragImage) {
      event.dataTransfer.setDragImage(dragImage, -10, -10);
    }

    const { offsetX, offsetY } = event;
    const rotation = getRotation(event.target);
    const center = getCenter(event.target);
    const rotatedOffset = rotateDot(center, [offsetX, offsetY], rotation);

    setClickOffset(rotatedOffset);

    setState({ action: "dragstart" });
  };

  const handleDrag = (event) => {
    if (stopPropagation) {
      event.stopPropagation();
    }

    const { clientX, clientY } = event;

    /**
     * Fix drop issue, when element goes to (0, 0) suddenly.
     * There is preventDefault solution (https://stackoverflow.com/a/32486095).
     * But i tested it, and it's not stable (works approx in ~90% cases).
     */
    if (clientX === 0 && clientY === 0) {
      return;
    }

    /**
     * Events with same coordinates filtering
     */
    if (filterMove && clientX === prevXY[0] && clientY === prevXY[1]) {
      return;
    }

    // TODO test it on scrolled page...
    const x = clientX - clickOffset[0] - parentXY[0];
    const y = clientY - clickOffset[1] - parentXY[1];

    setPrevXY([clientX, clientY]);
    setState({ action: "drag", data: { x, y } });
  };

  const handleDragEnd = (event) => {
    if (stopPropagation) {
      event.stopPropagation();
    }

    setState({ action: "dragend" });
  };

  useEvent("pointerdown", handlePointerDown, outerRef.current);
  useEvent("pointerup", handlePointerUp, outerRef.current);
  useEvent("dragstart", handleDragStart, outerRef.current);
  useEvent("drag", handleDrag, outerRef.current);
  useEvent("dragend", handleDragEnd, outerRef.current);

  return state;
};

export default useDraggable;
