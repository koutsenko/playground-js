import { useState, useEffect, RefObject } from 'react';

interface DraggableOptions {
  stopPropagation?: boolean;
}

interface DraggableState {
  action?: 'pointerdown' | 'pointermove' | 'pointerup';
  data?: {
    x: number;
    y: number;
  };
}

interface Point {
  x: number;
  y: number;
}

function useDraggable<T extends HTMLElement>(
  elementRef: { current: T | null },
  containerRef: { current: T | null },
  options: DraggableOptions = {}
): DraggableState {
  const [state, setState] = useState<DraggableState>({});
  const [isDragging, setIsDragging] = useState(false);
  const [startPoint, setStartPoint] = useState<Point | null>(null);
  const [elementStartPosition, setElementStartPosition] = useState<Point | null>(null);

  const { stopPropagation = false } = options;

  const handlePointerDown = (event: Event) => {
    const pointerEvent = event as PointerEvent;
    
    if (!elementRef.current || !containerRef.current) return;

    const element = elementRef.current;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    // Сохраняем начальную позицию указателя относительно контейнера
    setStartPoint({
      x: pointerEvent.clientX - containerRect.left,
      y: pointerEvent.clientY - containerRect.top
    });

    // Сохраняем текущую позицию элемента
    const computedStyle = window.getComputedStyle(element);
    setElementStartPosition({
      x: parseInt(computedStyle.left, 10) || 0,
      y: parseInt(computedStyle.top, 10) || 0
    });

    setIsDragging(true);
    setState({ action: 'pointerdown' });
  };

  const handlePointerMove = (event: Event) => {
    const pointerEvent = event as PointerEvent;
    
    if (!isDragging || !startPoint || !elementStartPosition || !containerRef.current) return;

    if (stopPropagation) {
      pointerEvent.stopPropagation();
      pointerEvent.preventDefault();
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    
    // Вычисляем текущую позицию указателя относительно контейнера
    const currentPoint = {
      x: pointerEvent.clientX - containerRect.left,
      y: pointerEvent.clientY - containerRect.top
    };

    // Вычисляем смещение от начальной точки
    const deltaX = currentPoint.x - startPoint.x;
    const deltaY = currentPoint.y - startPoint.y;

    // Обновляем позицию элемента, добавляя смещение к начальной позиции
    setState({
      action: 'pointermove',
      data: {
        x: elementStartPosition.x + deltaX,
        y: elementStartPosition.y + deltaY
      }
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setStartPoint(null);
    setElementStartPosition(null);
    setState({ action: 'pointerup' });
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('pointercancel', handlePointerUp);

    return () => {
      element.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [elementRef.current, isDragging, startPoint, elementStartPosition]);

  return state;
}

export default useDraggable; 