import React, { useRef, useState } from 'react';
import useDraggable from './useDraggable';
import '../styles/draggable.css';

interface DraggableItemProps {
  color: string;
  initialRotation?: number;
  initialPosition?: { x: number; y: number };
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ 
  color, 
  initialRotation = 0,
  initialPosition = { x: 0, y: 0 },
  containerRef
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { action, data } = useDraggable<HTMLDivElement>(elementRef, containerRef);
  const [position, setPosition] = useState(initialPosition);

  React.useEffect(() => {
    console.log('DraggableItem mounted, refs:', {
      element: elementRef.current,
      container: containerRef.current
    });
  }, []);

  React.useEffect(() => {
    if (action === 'pointermove' && data) {
      setPosition({ x: data.x, y: data.y });
    }
  }, [action, data]);

  const handlePointerDown = (e: React.PointerEvent) => {
    console.log('Direct pointerdown event:', e);
  };

  return (
    <div
      ref={elementRef}
      className="draggable-item"
      onPointerDown={handlePointerDown}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: '100px',
        height: '100px',
        backgroundColor: color,
        cursor: action === 'pointerdown' ? 'grabbing' : 'grab',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold',
        transform: `rotate(${initialRotation}deg)`,
        userSelect: 'none',
        touchAction: 'none',
        boxShadow: action === 'pointerdown' 
          ? '0 2px 4px rgba(0,0,0,0.2)'
          : '0 4px 8px rgba(0,0,0,0.1)',
        transition: action === 'pointerup' ? 'all 0.2s' : 'none',
      }}
    >
      <span style={{ pointerEvents: 'none' }}>Перетащи меня!</span>
    </div>
  );
};

const DraggableDemo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    console.log('DraggableDemo mounted, container ref:', containerRef.current);
  }, []);

  return (
    <div className="draggable-demo">
      <h2>Демонстрация Draggable компонента</h2>
      <div
        ref={containerRef}
        className="draggable-container"
        style={{
          position: 'relative',
          width: '600px',
          height: '400px',
          margin: '20px auto',
          padding: '20px',
          border: '2px dashed #ccc',
          borderRadius: '12px',
          overflow: 'hidden',
          touchAction: 'none'
        }}
      >
        <DraggableItem 
          color="#4CAF50" 
          initialRotation={0} 
          initialPosition={{ x: 50, y: 50 }}
          containerRef={containerRef}
        />
        <DraggableItem 
          color="#2196F3" 
          initialRotation={45} 
          initialPosition={{ x: 200, y: 150 }}
          containerRef={containerRef}
        />
        <DraggableItem 
          color="#9C27B0" 
          initialRotation={-30} 
          initialPosition={{ x: 350, y: 250 }}
          containerRef={containerRef}
        />
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
        Попробуйте перетащить элементы. Они сохраняют свой угол поворота при перемещении!
      </div>
    </div>
  );
};

export default DraggableDemo; 