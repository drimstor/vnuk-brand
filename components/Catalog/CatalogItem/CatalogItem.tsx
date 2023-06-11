import Image from 'next/image';
import React, { useRef, useState } from 'react';
import s from './CatalogItem.module.scss';
import { iProduct } from '@/helpers/types';
import { useRouter } from 'next/router';
import useHover from '@/hooks/useHover';
import clsx from 'clsx';
import useMediaQuery from '@/hooks/useMediaQuery';

interface CatalogItemProps {
  item: iProduct;
}

function CatalogItem({ item }: CatalogItemProps) {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [loadImage, setLoadImage] = useState(false);
  const media768 = useMediaQuery('(max-width: 768px)');
  const isHover = useHover(wrapperRef);

  return (
    <div className={s.wrapper} onClick={() => router.push(item.link)} ref={wrapperRef}>
      <div className={clsx(s.image, loadImage && s.show)}>
        <Image
          src={item.images[!media768 && isHover ? 1 : 0]}
          alt="product"
          onLoadStart={() => setLoadImage(false)}
          onLoad={() => setLoadImage(true)}
        />
      </div>
      <div className={s.text}>
        <h3 className={s.name}>{item.description}</h3>
        <span className={s.price}>{item.price} ₽</span>
      </div>
    </div>
  );
}

export default CatalogItem;
