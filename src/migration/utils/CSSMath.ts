type Point = [number, number];

export const getRotation = (element: HTMLElement): number => {
  const style = window.getComputedStyle(element);
  const matrix = new WebKitCSSMatrix(style.transform);
  return Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
};

export const getCenter = (element: HTMLElement): Point => {
  const rect = element.getBoundingClientRect();
  return [rect.width / 2, rect.height / 2];
};

export const rotateDot = (center: Point, dot: Point, angle: number): Point => {
  const rad = (angle * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const x = dot[0] - center[0];
  const y = dot[1] - center[1];

  return [
    x * cos - y * sin + center[0],
    x * sin + y * cos + center[1]
  ];
}; 