import React, { useRef, useEffect } from 'react';
import { FixedSizeList } from 'react-window';
import { usePrevious } from 'react-use';

const defaultEasing = (delta) => delta;

const AnimatedList = props => {
  const {
    duration = 1000,
    easing = defaultEasing,
    onAnimationComplete = () => { },
    scrollToItem,
    itemSize,
  } = props;

  const listRef = useRef();

  const innerState = useRef({
    _animationStartTime: undefined,
    _scrollOffsetInitial: 0,
    _scrollOffsetFinal: 0,
  });

  const _initAnimation = () => {
    if (innerState.current._animationStartTime) {
      throw Error('Animation in progress'); // You handle this however you want.
    }

    innerState.current._scrollOffsetFinal = scrollToItem * itemSize;
    innerState.current._animationStartTime = performance.now();
    _animate();
  }

  useEffect(() => {
    if (scrollToItem) {
      _initAnimation();
    }
  }, []);

  const prevScrollToItem = usePrevious(scrollToItem);

  useEffect(() => {
    if (prevScrollToItem !== scrollToItem) {
      _initAnimation();
    }
  }, [scrollToItem]);

  const _animate = () => {
    requestAnimationFrame(() => {
      const now = performance.now();
      const ellapsed = now - innerState.current._animationStartTime;
      const scrollDelta = innerState.current._scrollOffsetFinal - innerState.current._scrollOffsetInitial;
      const easedTime = easing(Math.min(1, ellapsed / duration));
      const scrollOffset = innerState.current._scrollOffsetInitial + scrollDelta * easedTime;

      listRef.current.scrollTo(scrollOffset);

      if (ellapsed < duration) {
        _animate();
      } else {
        innerState.current._animationStartTime = undefined;
        innerState.current._scrollOffsetInitial = innerState.current._scrollOffsetFinal;
        onAnimationComplete();
      }
    });
  }

  const onScroll = ({ scrollOffset, scrollUpdateWasRequested }) => {
    if (!scrollUpdateWasRequested) {
      innerState.current._scrollOffsetInitial = scrollOffset;
    }
  };

  return <FixedSizeList {...props} onScroll={onScroll} ref={listRef} />;

}

export default AnimatedList;
