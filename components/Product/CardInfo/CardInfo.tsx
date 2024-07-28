import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';
import s from './CardInfo.module.scss';
import ToolTip from '@/ui-kit/Tooltip/ToolTip';
import Button from '@/ui-kit/Buttons/Button';
import { iProduct } from '@/helpers/types';

interface CardInfoProps {
  product: iProduct;
}

function CardInfo({ product }: CardInfoProps) {
  const [activeSize, setActiveSize] = useState(-1);
  return (
    <>
      <div className={s.wrapper}>
        <h1>{product.title}</h1>
        <span className={s.description}>{product.description}</span>
        <span className={s.price}>{product.price} ₽</span>

        {product.material && (
          <div className={clsx(s.option, s.color)}>
            <span className={s.text}>Материал:</span>
            {/* <ToolTip title={product.material.name}>
              <div className={s.circle}>
                <Image src={product.material.material} alt="product-color" />
              </div>
            </ToolTip> */}
            <span className={s.materialText}>{product.material.name}</span>
          </div>
        )}
        {product.color && (
          <div className={clsx(s.option, s.color)}>
            <span className={s.text}>Цвет:</span>
            <ToolTip title={product.color?.name}>
              <div className={s.circle}>
                <Image src={product.color?.color} alt="product-color" />
              </div>
            </ToolTip>
          </div>
        )}
        <div className={clsx(s.option, s.size)}>
          <span className={s.text}>Размер:</span>
          {product.sizes?.map((size, index) => (
            <div
              className={clsx(s.circle, size.length > 5 && s.breakWords, index === activeSize && s.active)}
              key={index}
              onClick={() => setActiveSize(index)}
            >
              {size}
            </div>
          ))}
        </div>

        <Button size="small" isLink href="https://ig.me/m/vnukbrand" variant="contained">
          Купить
        </Button>
      </div>

      <ul className={s.bottomMenu}>
        <li>Таблица размеров</li>
        <li>Подробнее</li>
        <li>Поделиться в соцсетях</li>
      </ul>
    </>
  );
}

export default CardInfo;
