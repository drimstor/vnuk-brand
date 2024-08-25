import React from 'react';
import s from './CatalogBox.module.scss';
import { iProduct } from '@/helpers/types';
import Button from '@/ui-kit/Buttons/Button';
import clsx from 'clsx';
import CatalogItem from '../CatalogItem/CatalogItem';
import { NextButton, PrevButton } from './ui/NavigationArrows';
import useDragHandlers from './lib/hooks/useDragHandlers';
import useSlider from './lib/hooks/useSlider';

interface CatalogBoxProps {
  isShortVariant?: boolean;
  title?: string;
  items?: iProduct[];
  link?: string;
}

function CatalogBox({ isShortVariant, title, items, link }: CatalogBoxProps) {
  const { carouselRef, slideSize, scrollLeft, showButton, scrollToPrevSlide, scrollToNextSlide } = useSlider(
    items,
    isShortVariant
  );
  const { onMouseDownHandler, onMouseMoveHandler, onMouseUpHandler } = useDragHandlers(
    slideSize,
    scrollToPrevSlide,
    scrollToNextSlide
  );

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
          <PrevButton onClick={scrollToPrevSlide} isHidden={scrollLeft === 0} />
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
          <NextButton
            onClick={scrollToNextSlide}
            isHidden={
              Math.round(slideSize * (items.length - showButton.itemsLength)) === Math.abs(Math.round(scrollLeft))
            }
          />
        )}
      </div>
    </div>
  );
}

export default CatalogBox;
