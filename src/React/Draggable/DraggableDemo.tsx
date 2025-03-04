import React, { useRef } from 'react';
import styles from './DraggableDemo.module.css';
import { DraggableItem } from './DraggableItem';

const DraggableDemo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div >
      <h2>Демонстрация Draggable компонента</h2>
      <div
        ref={containerRef}
        className={styles.container}
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