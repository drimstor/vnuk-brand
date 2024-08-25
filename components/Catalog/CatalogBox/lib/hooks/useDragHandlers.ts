import { TouchEvent, useState } from 'react';

function useDragHandlers(slideSize: number, scrollToPrevSlide: () => void, scrollToNextSlide: () => void) {
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ clientX: 0, clientY: 0 });
  const [currentPosition, setCurrentPosition] = useState({ clientX: 0, clientY: 0 });
  const [translateDirection, setTranslateDirection] = useState(false);

  const onMouseDownHandler = (e: TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartPosition({ clientX: e.targetTouches[0].clientX, clientY: e.targetTouches[0].clientY });
  };

  const onMouseMoveHandler = (e: TouchEvent<HTMLDivElement>) => {
    if (isDragging) {
      const currentPositionX = e.targetTouches[0].clientX;
      const currentPositionY = e.targetTouches[0].clientY;
      setCurrentPosition({ clientX: currentPositionX, clientY: currentPositionY });
      setTranslateDirection(startPosition.clientX - currentPositionX >= 0);
    }
  };

  const onMouseUpHandler = (e: TouchEvent<HTMLDivElement>) => {
    setIsDragging(false);
    if (currentPosition.clientY - startPosition.clientY < 50 && startPosition.clientY - currentPosition.clientY < 50) {
      const moveSlideInDirection = translateDirection ? scrollToNextSlide : scrollToPrevSlide;
      moveSlideInDirection();
    }
  };

  return {
    onMouseDownHandler,
    onMouseMoveHandler,
    onMouseUpHandler,
  };
}

export default useDragHandlers;
