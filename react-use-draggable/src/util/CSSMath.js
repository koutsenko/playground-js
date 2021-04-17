/**
 * Возвращает X для transform: rotate(Xdeg).
 */
export const getRotation = (element) => {
  const st = element.style;
  const transform =
    st.getPropertyValue("-webkit-transform") ||
    st.getPropertyValue("-moz-transform") ||
    st.getPropertyValue("-ms-transform") ||
    st.getPropertyValue("-o-transform") ||
    st.getPropertyValue("transform");

  let result = 0;
  if (transform !== "") {
    const re = /(?:rotate\()(\d+)(?:deg\))/;
    const matches = transform.match(re);
    const localMatch1 = matches[1];
    const deg = parseInt(localMatch1, 10);

    result = deg;
  }

  return result;
};

/**
 * Геометрический центр элемента.
 */
export const getCenter = (element) => {
  const { offsetWidth, offsetHeight } = element;
  const center = [offsetWidth / 2, offsetHeight / 2];

  return center;
};

/**
 * Поворот точки dot1 на deg градусов. Центр окружности center.
 */
export const rotateDot = (center, dot1, deg) => {
  const rad = (deg * Math.PI) / 180;
  const rx = dot1[0] - center[0];
  const ry = dot1[1] - center[1];
  const c = Math.cos(rad);
  const s = Math.sin(rad);
  const x1 = center[0] + rx * c - ry * s;
  const y1 = center[1] + rx * s + ry * c;

  return [x1, y1];
};
