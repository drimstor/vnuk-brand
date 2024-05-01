import React from 'react';
import styles from './Ticker.module.scss';
import Marquee from 'react-double-marquee';

interface iTiker {
  text: string;
  direction: string;
  background: string;
  color: string;
}

export const tickerText =
  ' VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND VNUK BRAND ';

function Ticker({ text, direction, background, color }: iTiker) {
  return (
    <div className={styles.tikerBox} style={{ background: background }}>
      <Marquee direction={direction} scrollWhen={'overflow'} speed={0.1} delay={0} childMargin={0}>
        <span style={{ color: color }}>{text}</span>
      </Marquee>
    </div>
  );
}

export default Ticker;
