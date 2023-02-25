import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import s from './CardSlider.module.scss';
import img1 from '@/public/products/item2-1.png';
import img2 from '@/public/products/item2-2.png';
import img3 from '@/public/products/item2-3.png';
import clsx from 'clsx';
import useMediaQuery from '@/hooks/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassMinus, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
const images = [img1, img2, img3];

function CardSlider() {
  const tablet = useMediaQuery('(max-width: 769px)');
  const imagesCarouselRef = useRef<HTMLDivElement>(null);
  const [slideSize, setSlideSize] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [startPosition, setStartPosition] = useState(0);
  const [translateDirection, setTranslateDirection] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [debounce, setDebounce] = useState<any>(false);
  const [isZoom, setIsZoom] = useState(false);
  const [isImageLoad, setIsImageLoad] = useState(false);

  useEffect(() => {
    if (imagesCarouselRef.current) {
      if (tablet) {
        setSlideSize((imagesCarouselRef.current.scrollWidth + 150) / images.length);
      } else {
        setSlideSize(imagesCarouselRef.current.scrollHeight / images.length);
      }
    }
  }, []);

  const scrollToSlide = (index: number) => {
    if (imagesCarouselRef.current) {
      if (tablet) {
        imagesCarouselRef.current.scrollLeft = slideSize * index;
      } else {
        imagesCarouselRef.current.scrollTop = slideSize * index;
      }
    }
  };

  const onClickSlideHandler = (index: number) => {
    setActiveSlide(index);
    scrollToSlide(index);
  };

  const onScrollHandler = () => {
    if (imagesCarouselRef.current) {
      if (!tablet) {
        setActiveSlide(Math.round(imagesCarouselRef.current.scrollTop / slideSize));
      }
    }
  };

  const onMouseDownHandler = (e: any) => {
    setIsDragging(true);
    setStartPosition(e.targetTouches[0].clientX);
  };

  const onMouseMoveHandler = (e: any) => {
    if (isDragging) {
      const currentPosition = e.targetTouches[0].clientX;

      if (imagesCarouselRef.current) {
        setTranslateDirection(startPosition - currentPosition >= 0);
      }
    }
  };

  const onMouseUpHandler = () => {
    setIsDragging(false);
    const decr = activeSlide > 0 ? activeSlide - 1 : activeSlide;
    const incr = activeSlide === images.length - 1 ? activeSlide : activeSlide + 1;
    const slideAction = translateDirection ? incr : decr;

    if (!!debounce) {
      clearTimeout(debounce);
    }

    setDebounce(setTimeout(() => onClickSlideHandler(slideAction), 50));
  };

  return (
    <>
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
        // onMouseDown={onMouseDownHandler}
        // onMouseMove={onMouseMoveHandler}
        // onMouseUp={onMouseUpHandler}
      >
        {images.map((img, index) => (
          <div className={s.slideBox} key={index}>
            <Image
              src={img}
              alt="item-product"
              className={clsx(isImageLoad && s.imageLoad)}
              onLoad={() => setIsImageLoad(true)}
            />
          </div>
        ))}
      </div>
      <div className={s.controlCarousel}>
        {images.map((img, index) => (
          <Image
            src={img}
            alt="item-product-mini"
            key={index}
            className={clsx(activeSlide === index && s.active)}
            onClick={() => onClickSlideHandler(index)}
          />
        ))}
      </div>
    </>
  );
}

export default CardSlider;
