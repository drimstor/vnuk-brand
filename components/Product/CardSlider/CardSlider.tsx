import Image from 'next/image';
import React, { TouchEvent, useEffect, useRef, useState } from 'react';
import s from './CardSlider.module.scss';
import clsx from 'clsx';
import useMediaQuery from '@/hooks/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassMinus, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import { iProduct } from '@/helpers/types';
import BackButton from '@/ui-kit/Buttons/BackButton';

interface CardSliderProps {
  images: iProduct['images'];
}

type Timer = ReturnType<typeof setTimeout>;

function CardSlider({ images }: CardSliderProps) {
  const tablet = useMediaQuery('(max-width: 769px)');
  const imagesCarouselRef = useRef<HTMLDivElement>(null);
  const [slideSize, setSlideSize] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [startPosition, setStartPosition] = useState({ clientX: 0, clientY: 0 });
  const [currentPosition, setCurrentPosition] = useState({ clientX: 0, clientY: 0 });
  const [scrollLeft, setScrollLeft] = useState(0);
  const [translateDirection, setTranslateDirection] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [debounce, setDebounce] = useState<Timer | false>(false);
  const [isZoom, setIsZoom] = useState(false);
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  useEffect(() => {
    if (imagesCarouselRef.current) {
      if (tablet) {
        setSlideSize((imagesCarouselRef.current.scrollWidth + 150) / images.length);
      } else {
        setSlideSize(imagesCarouselRef.current.scrollHeight / images.length);
      }
    }
  }, [images.length, tablet]);

  const scrollToSlide = (index: number) => {
    if (imagesCarouselRef.current) {
      if (tablet) {
        setScrollLeft(slideSize * index);
      } else {
        imagesCarouselRef.current.scrollTop = slideSize * index;
      }
    }
  };

  const onClickToSlideHandler = (index: number) => {
    setActiveSlide(index);
    scrollToSlide(index);
  };

  const onScrollHandler = () => {
    if (debounce) {
      clearTimeout(debounce);
    }

    if (!tablet) {
      setDebounce(
        setTimeout(
          () =>
            imagesCarouselRef.current && setActiveSlide(Math.round(imagesCarouselRef.current.scrollTop / slideSize)),
          100
        )
      );
    }
  };

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

    if (
      Math.round(e.changedTouches[0].pageX) !== Math.round(startPosition.clientX) &&
      Math.round(e.changedTouches[0].pageY) !== Math.round(startPosition.clientY) &&
      currentPosition.clientY - startPosition.clientY < 50 &&
      startPosition.clientY - currentPosition.clientY < 50
    ) {
      const decr = activeSlide > 0 ? activeSlide - 1 : activeSlide;
      const incr = activeSlide === images.length - 1 ? activeSlide : activeSlide + 1;
      const slideAction = translateDirection ? incr : decr;

      onClickToSlideHandler(slideAction);
    }
  };

  return (
    <>
      <div className={s.sliderWindow}>
        <BackButton />
        <div className={s.zoomButton} onClick={() => setIsZoom(!isZoom)}>
          <FontAwesomeIcon icon={isZoom ? faMagnifyingGlassMinus : faMagnifyingGlassPlus} />
        </div>
        <div
          className={clsx(s.imagesCarousel, isZoom && s.zoom)}
          ref={imagesCarouselRef}
          onScroll={onScrollHandler}
          onTouchStart={onMouseDownHandler}
          onTouchMove={onMouseMoveHandler}
          onTouchEnd={onMouseUpHandler}
          style={{ transform: `translateX(${-scrollLeft}px)` }}
        >
          {images.map((img, index) => (
            <div className={s.slideBox} key={-index}>
              <Image
                src={img}
                alt="item-product"
                quality={100}
                className={clsx(loadedImages && loadedImages.includes(index) && s.imageLoad)}
                onLoad={() => setLoadedImages((prev: number[]) => [...prev, index])}
                priority
              />
            </div>
          ))}
        </div>
      </div>
      <div className={s.controlCarousel}>
        {images.map((img, index) => (
          <div
            key={index}
            className={clsx(s.controlCarouselBox, activeSlide === index && s.active)}
            onClick={() => onClickToSlideHandler(index)}
          >
            <Image src={img} alt="item-product-mini" />
          </div>
        ))}
      </div>
    </>
  );
}

export default CardSlider;
