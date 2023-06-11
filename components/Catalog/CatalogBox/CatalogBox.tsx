import { iProduct } from '@/helpers/types';
import Button from '@/ui-kit/Buttons/Button';
import clsx from 'clsx';
import React, { TouchEvent, useEffect, useRef, useState } from 'react';
import CatalogItem from '../CatalogItem/CatalogItem';
import s from './CatalogBox.module.scss';
import arrowIcon from '@/ui-kit/Other/arrow.svg';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

interface CatalogBoxProps {
  isShortVariant?: boolean;
  title?: string;
  items?: iProduct[];
  link?: string;
}

function CatalogBox({ isShortVariant, title, items, link }: CatalogBoxProps) {
  const media1380 = useMediaQuery('(max-width: 1380px)');
  const media1068 = useMediaQuery('(max-width: 1068px)');
  const media768 = useMediaQuery('(max-width: 768px)');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [slideSize, setSlideSize] = useState(320);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showButton, setShowButton] = useState({ isShowButton: false, itemsLength: 4 });
  const [startPosition, setStartPosition] = useState({ clientX: 0, clientY: 0 });
  const [currentPosition, setCurrentPosition] = useState({ clientX: 0, clientY: 0 });
  const [translateDirection, setTranslateDirection] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (items) {
      const itemsLength = media768 ? 1 : media1068 ? 2 : media1380 ? 3 : 4;
      const isShowButton = media768
        ? items?.length > 1
        : media1068
        ? items?.length > 2
        : media1380
        ? items?.length > 3
        : items?.length > 4;

      setShowButton({ isShowButton, itemsLength });
    }
  }, [media1380, media1068, media768]);

  useEffect(() => {
    if (carouselRef.current && items) {
      setSlideSize(Math.round(carouselRef.current.scrollWidth / items.length));
    }
  }, []);

  const scrollToPrevSlide = () => {
    if (isShortVariant && scrollLeft !== 0) {
      setScrollLeft((prev) => prev + slideSize);
    }
  };

  const scrollToNextSlide = () => {
    if (
      isShortVariant &&
      items &&
      !(Math.round(slideSize * (items?.length - showButton.itemsLength)) === Math.abs(Math.round(scrollLeft)))
    ) {
      setScrollLeft((prev) => prev - slideSize);
    }
  };

  // ---------- Mobile -----------  //

  const onMouseDownHandler = (e: TouchEvent<HTMLDivElement>) => {
    if (items && items.length > showButton.itemsLength) {
      setIsDragging(true);
      setStartPosition({ clientX: e.targetTouches[0].clientX, clientY: e.targetTouches[0].clientY });
    }
  };

  const onMouseMoveHandler = (e: TouchEvent<HTMLDivElement>) => {
    if (isDragging && items && items.length > showButton.itemsLength) {
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
      const moveSlideInDirection = translateDirection ? scrollToNextSlide : scrollToPrevSlide;
      moveSlideInDirection();
    }
  };

  return (
    <div className={s.wrapper}>
      {isShortVariant && (
        <div className={s.titleBox}>
          <h2>{title}</h2>
          <Button variant="contained" size="small" href={link} isLink>
            Посмотреть все
          </Button>
        </div>
      )}
      <div className={s.sliderControlWrapper}>
        {items && isShortVariant && showButton.isShowButton && (
          <div className={clsx(s.button, s.prevButton, scrollLeft === 0 && s.transparent)} onClick={scrollToPrevSlide}>
            <Image src={arrowIcon} alt="arrow" />
          </div>
        )}
        <div className={s.sliderWindow}>
          <div
            style={{ transform: `translateX(${scrollLeft}px)` }}
            className={clsx(s.sliderCarousel, !isShortVariant && s.fullView)}
            ref={carouselRef}
            onTouchStart={onMouseDownHandler}
            onTouchMove={onMouseMoveHandler}
            onTouchEnd={onMouseUpHandler}
          >
            {items && items.map((item) => <CatalogItem item={item} key={item.id} />)}
          </div>
        </div>

        {items && isShortVariant && showButton.isShowButton && (
          <div
            className={clsx(
              s.button,
              s.nextButton,
              Math.round(slideSize * (items?.length - showButton.itemsLength)) === Math.abs(Math.round(scrollLeft)) &&
                s.transparent
            )}
            onClick={scrollToNextSlide}
          >
            <Image src={arrowIcon} alt="arrow" />
          </div>
        )}
      </div>
    </div>
  );
}

export default CatalogBox;
