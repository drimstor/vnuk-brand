import clsx from 'clsx';
import React from 'react';
import styles from './Preloader.module.scss';

interface GlobalPreloaderProps {
  isHideLoader: boolean;
}

function GlobalPreloader({ isHideLoader }: GlobalPreloaderProps) {
  return (
    <div className={clsx(styles.box, isHideLoader && styles.hideLoader)}>
      <div className={styles.hexagon}>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
        </div>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
        </div>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
        </div>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
        </div>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
        </div>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
          <div className={styles.hexagon__sector} />
        </div>
      </div>
    </div>
  );
}

export default GlobalPreloader;
