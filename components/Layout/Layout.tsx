import Head from 'next/head';
import React, { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import s from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
  isWithoutFooter?: boolean;
  isHeaderAnimation?: boolean;
  pageTitle?: string;
}

function Layout({ children, isWithoutFooter, isHeaderAnimation, pageTitle }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={s.globalWrapper}>
        {/* <Header isHeaderAnimation={isHeaderAnimation} /> */}
        {children}
        {!isWithoutFooter && <Footer />}
      </div>
    </>
  );
}

export default Layout;
