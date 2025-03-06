import React, { useEffect, useRef, useState } from 'react';
import useDraggable from './useDraggable';
// TODO Настроить подсветку неправильных импортов CSS посредством jsserver/tsserver, а не ESLint.
import classes from './DraggableItem1.module.css';

interface DraggableItemProps {
    color: string;
    initialRotation?: number;
    initialPosition?: { x: number; y: number };
    containerRef: React.RefObject<HTMLDivElement | null>;
}

export const DraggableItem: React.FC<DraggableItemProps> = ({
    color,
    initialRotation = 0,
    initialPosition = { x: 0, y: 0 },
    containerRef
}) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const { action, data } = useDraggable<HTMLDivElement>(elementRef, containerRef);
    const [position, setPosition] = useState(initialPosition);

    useEffect(() => {
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
            className={classes.item}
            onPointerDown={handlePointerDown}
            style={{
                left: position.x,
                top: position.y,
                backgroundColor: color,
                cursor: action === 'pointerdown' ? 'grabbing' : 'grab',
                transform: `rotate(${initialRotation}deg)`,
                boxShadow: action === 'pointerdown'
                    ? '0 2px 4px rgba(45, 35, 35, 0.2)'
                    : '0 4px 8px rgba(0,0,0,0.1)',
                transition: action === 'pointerup' ? 'all 0.2s' : 'none',
            }}
        >
            <span style={{ pointerEvents: 'none' }}>Перетащи меня!</span>
        </div>
    );
};