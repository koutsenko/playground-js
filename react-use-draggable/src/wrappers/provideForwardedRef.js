/**
 * Обертка, создает ref ссылку, которая будет по цепочке передана в компонент.
 * Компонент обязан будет ее принять через forwardRef и отрисовать.
 * Промежуточные обертки могут ее принять (КАК) и донавесить доп. логику.
 */

import React, { useRef } from "react";

const provideRef = (WrappedComponent) => (props) => {
  const elementRef = useRef(null);

  return <WrappedComponent {...{ ...props, elementRef }} />;
};

export default provideRef;
