/**
 * Инпут для ввода поворота.
 * Валидация минимальная, на уровне фильтра нечисловых значений.
 * Локального состояния нет, индикации невалидного значения тоже нет.
 * Чтобы просто работало, короче.
 */

import styles from "./index.module.css";

import React from "react";

import { consumeBlockContext } from "../../../context/Block";

const PureRotationProperty = (props) => {
  const { contextData } = props;
  const { blockData, setBlockData } = contextData;
  const { rotation } = blockData;

  const handleChange = (event) => {
    const { value } = event.target;
    const parsedValue = parseInt(value, 10);

    if (Number.isNaN(parsedValue)) {
      return;
    }

    setBlockData((bd) => ({
      ...bd,
      rotation: parsedValue,
    }));
  };

  return (
    <label className={styles.rotationInput}>
      Поворот
      <input onChange={handleChange} value={rotation} />
    </label>
  );
};

const RotationProperty = ((Comp) => {
  Comp = consumeBlockContext(Comp);

  return Comp;
})(PureRotationProperty);

export default RotationProperty;
