import { useEffect, useState, useRef } from 'react';
import { iProduct } from '@/helpers/types';

function useSlider(items?: iProduct[], isShortVariant?: boolean) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [slideSize, setSlideSize] = useState(320);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showButton, setShowButton] = useState({ isShowButton: false, itemsLength: 4 });

  useEffect(() => {
    if (items) {
      const itemsLength = window.matchMedia('(max-width: 768px)').matches
        ? 1
        : window.matchMedia('(max-width: 1068px)').matches
        ? 2
        : window.matchMedia('(max-width: 1380px)').matches
        ? 3
        : 4;
      const isShowButton = items.length > itemsLength;
      setShowButton({ isShowButton, itemsLength });
    }
  }, [items]);

  useEffect(() => {
    if (carouselRef.current && items) {
      setSlideSize(Math.round(carouselRef.current.scrollWidth / items.length));
    }
  }, [items]);

  const scrollToPrevSlide = () => {
    if (isShortVariant && scrollLeft !== 0) {
      setScrollLeft((prev) => prev + slideSize);
    }
  };

  const scrollToNextSlide = () => {
    if (
      isShortVariant &&
      items &&
      !(Math.round(slideSize * (items.length - showButton.itemsLength)) === Math.abs(Math.round(scrollLeft)))
    ) {
      setScrollLeft((prev) => prev - slideSize);
    }
  };

  return {
    carouselRef,
    slideSize,
    scrollLeft,
    showButton,
    scrollToPrevSlide,
    scrollToNextSlide,
  };
}

export default useSlider;
