import React, { useState } from 'react';
import { render } from 'react-dom';
import AnimatedList from './AnimatedList';
import ItemRenderer from './ItemRenderer';

const easeInOutQuint = t => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;

const App = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollToItem, setScrollToItem] = useState();

  const animationComplete = () => setIsAnimating(false);

  const jumpToRandom = () => {
    setIsAnimating(true);
    setScrollToItem(Math.round(Math.random() * 999));
  };

  return (
    <div>
      <button disabled={isAnimating} onClick={jumpToRandom}>
        Jump to random
      </button>
      <br />
      <br />
      <AnimatedList
        duration={2500}
        easing={easeInOutQuint}
        width={300}
        height={300}
        onAnimationComplete={animationComplete}
        itemCount={10000}
        itemSize={30}
        scrollToItem={scrollToItem}
        style={{
          backgroundColor: '#eee',
        }}
      >
        {ItemRenderer}
      </AnimatedList>
    </div>
  );
};

render(<App />, document.getElementById('root'));
