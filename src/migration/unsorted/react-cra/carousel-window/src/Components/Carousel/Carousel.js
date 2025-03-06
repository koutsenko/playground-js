import { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const slideWidth = 400;
const slideHeight = 200;

const slides = ["Slide #0", "Slide #1", "Slide #2", "Slide #3", "Slide #4"];

/**
 * Реализация требует минимум два слайда.
 */
export const Carousel = () => {
    const [visibleSlide, setVisibleSlide] = useState(0)
    const [hasTransitionClass, setHasTransitionClass] = useState(true)
    const [stateSlides, setStateSlides] = useState(slides)

    useEffect(() => {
        setStateSlides([...slides])
    }, [])

    const scrollRight = () => {
        if (visibleSlide < stateSlides.length - 1) {
            setVisibleSlide(prev => prev + 1);
        } else {
            const nextStateSlides = [...stateSlides];
            nextStateSlides.push(nextStateSlides.shift());
            console.log(stateSlides, nextStateSlides);
            setStateSlides(nextStateSlides);

            // Переставляем на старую позицию в новом аккордеоне
            setHasTransitionClass(false);
            setVisibleSlide(prev => prev - 1);
    
            // Даем ей отрендериться и красиво крутим к следующей 
            setTimeout(() => {
                setHasTransitionClass(true);
                setVisibleSlide(prev => prev + 1);
            });
        } 
    }

    const scrollLeft = () => {
        if (visibleSlide > 0) {
            setVisibleSlide(prev => prev - 1);
        } else {
            const nextStateSlides = [...stateSlides];
            nextStateSlides.unshift(nextStateSlides.pop());
            console.log(stateSlides, nextStateSlides);
            setStateSlides(nextStateSlides);

            // Переставляем на старую позицию в новом аккордеоне
            setHasTransitionClass(false);
            setVisibleSlide(prev => prev + 1);
    
            // Даем ей отрендериться и красиво крутим к следующей 
            setTimeout(() => {
                setHasTransitionClass(true);
                setVisibleSlide(prev => prev - 1);
            });
        }
    }

    return (
        <div className="carousel">
            <div className="slidesContainer" style={{ width: slideWidth + "px", height: slideHeight + "px" }}>
                <div
                    className={`slides ${hasTransitionClass ? "transition" : ""}`}
                    style={{ left: `-${visibleSlide * slideWidth}px` }}>
                    {stateSlides.map((slide, index) => (
                        <div key={index} className="slide" style={{ width: slideWidth + "px", height: slideHeight + "px" }}>
                            <p>{slide}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={scrollLeft}>Left</button>
            <button onClick={scrollRight}>Right</button>
        </div>
    )
}
