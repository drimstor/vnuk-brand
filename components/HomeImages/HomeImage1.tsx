import React, { useEffect, useRef, useState } from 'react';
import homeImg1Mobile from 'public/home/home-1-mobile.png';
import homeImg1 from 'public/home/home-1.png';
import Image from 'next/image';
import styles from './HomeImages.module.scss';
import Button from '@/ui-kit/Buttons/Button';
import Tilt from '../Tilt/Tilt';
import GlobalPreloader from '../Preloader/GlobalPreloader';
import clsx from 'clsx';

function HomeImage1() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isHideLoader, setIsHideLoader] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(min-width: 425px)').matches) setIsMobileView(true);
  }, []);

  return (
    <div className={styles.homeImageBox}>
      <GlobalPreloader isHideLoader={isHideLoader} />
      <Image
        className={styles.mainImage}
        src={isMobileView ? homeImg1Mobile : homeImg1}
        alt="home"
        onLoad={() => setIsHideLoader(true)}
        quality={100}
      />
      <Tilt className={clsx(styles.textWrapper, isHideLoader && styles.showBlock)}>
        <h3>
          Festive autumn-winter 2023/24
          <br /> collection
        </h3>
        <Button isLink href="/catalog" size="small" variant="contained">
          В каталог
        </Button>
      </Tilt>
    </div>
  );
}

export default HomeImage1;
