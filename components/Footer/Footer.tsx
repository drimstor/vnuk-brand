import { footerLinks } from '@/helpers/constants';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import s from './Footer.module.scss';

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={clsx('wrapper', s.wrapper)}>
        {footerLinks.map((list, index) => (
          <ul className={clsx(s.list, list.title === 'Контакты' && s.contacts)} key={index}>
            <h3>{list.title}</h3>
            {list.links.map((link, index) => (
              <li key={-index}>
                <Link href={link.link} target={list.title === 'Контакты' ? '_blank' : '_self'}>
                  {typeof link.name === 'string' ? link.name : <Image src={link.name} alt="vk" />}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className={clsx('wrapper', s.bottom)}>
        <p className={s.text}>
          Applications listed on appstorespy.com are from the Google Play Store and the Apple App Store® and all the
          rights belong to their respective owners. Android, Google Play and the Google Play logo are trademarks of
          Google LLC.
        </p>
        <span className={s.copyright}>2023 VNUK©</span>
      </div>
    </footer>
  );
}

export default Footer;
