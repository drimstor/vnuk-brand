import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';
import s from './CardInfo.module.scss';
import productColor from 'public/products/item2color.png';
import silk from 'public/products/silk.jpeg';
import ToolTip from '@/ui-kit/Tooltip/ToolTip';
import Button from '@/ui-kit/Buttons/Button';

const sizes = ['34', '36'];

function CardInfo() {
  const [activeSize, setActiveSize] = useState(-1);
  return (
    <div className={s.wrapper}>
      <h1>Юбка</h1>
      <span className={s.description}>Юбка из вискозного трикотажа</span>
      <span className={s.price}>55 000 ₽</span>

      <div className={clsx(s.option, s.color)}>
        <span className={s.text}>Материал:</span>
        <ToolTip title="Шелк">
          <div className={s.circle}>
            <Image src={silk} alt="product-color" />
          </div>
        </ToolTip>
      </div>

      <div className={clsx(s.option, s.color)}>
        <span className={s.text}>Цвет:</span>
        <ToolTip title="Фуксия">
          <div className={s.circle}>
            <Image src={productColor} alt="product-color" />
          </div>
        </ToolTip>
      </div>
      <div className={clsx(s.option, s.size)}>
        <span className={s.text}>Размер:</span>
        {sizes.map((size, index) => (
          <div
            className={clsx(s.circle, index === activeSize && s.active)}
            key={index}
            onClick={() => setActiveSize(index)}
          >
            {size}
          </div>
        ))}
      </div>

      <Button size="small" variant="contained">
        Купить
      </Button>
    </div>
  );
}

export default CardInfo;
