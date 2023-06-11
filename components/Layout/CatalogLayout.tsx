import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import s from './Layout.module.scss';

interface CatalogLayoutProps {
  children: ReactNode;
  title?: string;
}

function CatalogLayout({ children, title }: CatalogLayoutProps) {
  const router = useRouter();
  const path = router.asPath.split('/');

  return (
    <div className={s.catalogWrapper}>
      <h1 className={s.title}>{title}</h1>
      <div className={clsx('wrapper', s.wrapper)}>
        <ul className={s.breadcrumbs}>
          <li>
            <Link href={'/'}>Главная </Link>
          </li>
          <li>
            <Link href={'/catalog'}>Каталог</Link>
          </li>
          {path.length > 3 && (
            <li>
              <Link href={'#'}>{title}</Link>
            </li>
          )}
        </ul>
        {children}
      </div>
    </div>
  );
}

export default CatalogLayout;
