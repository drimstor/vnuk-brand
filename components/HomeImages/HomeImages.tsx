import React from 'react';
import Image from 'next/image';
import styles from './HomeImages.module.scss';
import HomeImage1 from './HomeImage1';
import Ticker from '../Ticker/Ticker';
import homeImg2 from 'public/home/home-2.png';
import homeImg3 from 'public/home/home-3.png';

function HomeImages() {
  const tickerText =
    ' VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND ';
  return (
    <div className={styles.homeWrapper}>
      <HomeImage1 />
      <Ticker text={tickerText} direction={'right'} background={'#f3eeea'} color={'#000'} />
      <div className={styles.tiker1Box}>
        <Ticker text={tickerText} direction={'left'} background={'#000'} color={'#f3eeea'} />
      </div>
      <Image className={styles.mainImage} src={homeImg2} alt="home" quality={100} priority />

      <div className={styles.tiker2Box}>
        <Ticker text={tickerText} direction={'right'} background={'#f3eeea'} color={'#000'} />
      </div>
      <Ticker text={tickerText} direction={'left'} background={'#000'} color={'#f3eeea'} />
      <Image className={styles.mainImage} src={homeImg3} alt="home" quality={100} priority />
    </div>
  );
}

export default HomeImages;
