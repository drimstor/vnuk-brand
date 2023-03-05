import { navList } from '@/helpers/constants';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import s from './Header.module.scss';
import arrowIcon from '@/ui-kit/Other/arrow.svg';
import useHover from '@/hooks/useHover';
import useMediaQuery from '@/hooks/useMediaQuery';

interface HeaderProps {
  isHeaderAnimation?: boolean;
}

function Header({ isHeaderAnimation }: HeaderProps) {
  const navRef = useRef(null);
  const isHover = useHover(navRef);
  const media768 = useMediaQuery('(max-width: 768px)');
  const [isShowBurgerMenu, setIsShowBurgerMenu] = useState(false);
  const [indexOpenedMenu, setIndexOpenedMenu] = useState(-1);
  const menuItemHeight = 45;

  const showSubMenuItemHandler = (index: number) => {
    if (index !== indexOpenedMenu) {
      setIndexOpenedMenu(index);
    } else {
      setIndexOpenedMenu(-1);
    }
  };

  return (
    <header className={clsx(s.header, isHeaderAnimation && s.animation)}>
      <div className={s.nav} ref={navRef}>
        <div
          className={clsx(s.burgerButton, isShowBurgerMenu && s.active)}
          onClick={() => setIsShowBurgerMenu(!isShowBurgerMenu)}
        >
          <span />
        </div>
        <Link href="/catalog" className={s.catalogButton}>
          Каталог <Image src={arrowIcon} alt="arrow" />
        </Link>

        <div className={clsx(s.navMenuBox, isShowBurgerMenu && s.show)}>
          <div className={clsx(s.navItem, s.mobileElement)} onClick={() => setIsShowBurgerMenu(false)}>
            <Link href="/catalog">Каталог</Link>
          </div>
          {navList.map((listItem, index) => (
            <div className={s.navItem} key={listItem.name + index}>
              <Link href={listItem.link} onClick={() => showSubMenuItemHandler(index)}>
                {listItem.name} <Image src={arrowIcon} alt="arrow" />
              </Link>
              {listItem.subList && (
                <ul
                  className={clsx(s.subItemBox, indexOpenedMenu === index && s.open)}
                  style={
                    media768 && indexOpenedMenu === index ? { height: menuItemHeight * listItem.subList.length } : {}
                  }
                >
                  {listItem.subList.map((subListItem) => (
                    <li key={subListItem.name + index} onClick={() => setIsShowBurgerMenu(false)}>
                      <Link href={subListItem.link}>{subListItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <span className={s.logo}>VNUK</span>
      <h6></h6>
      <div className={clsx(s.backdrop, !media768 && isHover && s.show)} />
    </header>
  );
}

export default Header;
