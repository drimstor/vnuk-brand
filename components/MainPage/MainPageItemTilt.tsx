import Image, { StaticImageData } from 'next/image';
import styles from './MainPage.module.scss';
import Tilt from '../Tilt/Tilt';
import clsx from 'clsx';
import Button from '@/ui-kit/Buttons/Button';
import { ReactNode, useState } from 'react';

interface IMainPageItemTilt {
  imgPath: StaticImageData;
  title: string | ReactNode;
  button: {
    text: string;
    href: string;
  };
}

const MainPageItemTilt = ({ imgPath, title, button }: IMainPageItemTilt) => {
  const [isHideLoader, setIsHideLoader] = useState(false);

  return (
    <div className={styles.homeImageBox}>
      <Image className={styles.mainImage} onLoad={() => setIsHideLoader(true)} src={imgPath} alt="home" quality={100} />
      <Tilt className={clsx(styles.textWrapper, isHideLoader && styles.showBlock)}>
        <h3>{title}</h3>
        <Button isLink href={button.href} size="small" variant="contained">
          {button.text}
        </Button>
      </Tilt>
    </div>
  );
};

export default MainPageItemTilt;
