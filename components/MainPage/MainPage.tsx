import Image from 'next/image';
import styles from './MainPage.module.scss';
import homeImg1 from 'public/home/1.jpg';
import homeImg2 from 'public/home/2.jpg';
import homeImg3 from 'public/home/3.jpg';
import homeImg4 from 'public/home/4.jpg';
import homeImg5 from 'public/home/5.jpg';
import GlobalPreloader from '../Preloader/GlobalPreloader';
import { useState } from 'react';
import TickerV1 from '../Ticker/TickerV1';
import clsx from 'clsx';
import MainPageItemTilt from './MainPageItemTilt';
import TickerV2 from '../Ticker/TickerV2';

const MainPage = () => {
  const [isHideLoader, setIsHideLoader] = useState(false);

  return (
    <>
      <GlobalPreloader isHideLoader={isHideLoader} />
      <div className={styles.globalBox}>
        <Image
          className={clsx(styles.mainImage, styles.mainImage1)}
          onLoad={() => setIsHideLoader(true)}
          src={homeImg1}
          alt="home"
          quality={100}
          priority
        />
        <TickerV1 />
        <MainPageItemTilt
          imgPath={homeImg2}
          title={
            <>
              SEASON 2023/24
              <br /> collection
            </>
          }
          button={{
            text: 'В каталог',
            href: '/catalog',
          }}
        />
        <TickerV2 />
        <MainPageItemTilt
          imgPath={homeImg3}
          title={
            <>
              {' '}
              SEASON 2023/24
              <br /> DRESSES
            </>
          }
          button={{
            text: 'Платья',
            href: '/catalog/women/dresses',
          }}
        />
        <TickerV1 />
        <MainPageItemTilt
          imgPath={homeImg4}
          title={
            <>
              {' '}
              SEASON 2023/24
              <br /> suits
            </>
          }
          button={{
            text: 'Костюмы',
            href: '/catalog/men/suits',
          }}
        />
        <TickerV2 />
        <Image className={clsx(styles.mainImage)} src={homeImg5} alt="home" quality={100} priority />
      </div>
    </>
  );
};

export default MainPage;
