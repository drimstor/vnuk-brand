import { iCatalog, iProduct } from '@/helpers/types';
import { products } from './products';

export const catalogs: iCatalog[] = [
  {
    title: 'Платья',
    sex: 'women',
    clothes: 'dresses',
    link: '/catalog/women/dresses',
    items: products.filter((product: iProduct) => product.sex === 'women' && product.clothes === 'dresses'),
  },
  {
    title: 'Юбки',
    sex: 'women',
    clothes: 'skirts',
    link: '/catalog/women/skirts',
    items: products.filter((product: iProduct) => product.sex === 'women' && product.clothes === 'skirts'),
  },
  {
    title: 'Боди',
    sex: 'women',
    clothes: 'bodysuits',
    link: '/catalog/women/bodysuits',
    items: products.filter((product: iProduct) => product.sex === 'women' && product.clothes === 'bodysuits'),
  },
  {
    title: 'Рубашки',
    sex: 'men',
    clothes: 'shirts',
    link: '/catalog/men/shirts',
    items: products.filter((product: iProduct) => product.sex === 'men' && product.clothes === 'shirts'),
  },
  {
    title: 'Шубы',
    sex: 'women',
    clothes: 'fur-coats',
    link: '/catalog/women/fur-coats',
    items: products.filter((product: iProduct) => product.sex === 'women' && product.clothes === 'fur-coats'),
  },
  {
    title: 'Плащи',
    sex: 'men',
    clothes: 'trench-coats',
    link: '/catalog/men/trench-coats',
    items: products.filter((product: iProduct) => product.sex === 'men' && product.clothes === 'trench-coats'),
  },
  {
    title: 'Куртки',
    sex: 'women',
    clothes: 'jackets',
    link: '/catalog/women/jackets',
    items: products.filter((product: iProduct) => product.sex === 'women' && product.clothes === 'jackets'),
  },
  {
    title: 'Джоггеры',
    sex: 'women',
    clothes: 'joggers',
    link: '/catalog/women/joggers',
    items: products.filter((product: iProduct) => product.sex === 'women' && product.clothes === 'joggers'),
  },
  {
    title: 'Костюмы',
    sex: 'men',
    clothes: 'suits',
    link: '/catalog/men/suits',
    items: products.filter((product: iProduct) => product.sex === 'men' && product.clothes === 'suits'),
  },
  {
    title: 'Жилеты',
    sex: 'men',
    clothes: 'vests',
    link: '/catalog/men/vests',
    items: products.filter((product: iProduct) => product.sex === 'men' && product.clothes === 'vests'),
  },
  // {
  //   title: 'Костюмы',
  //   sex: 'women',
  //   clothes: 'suits',
  //   link: '/catalog/women/suits',
  //   items: products.filter((product: iProduct) => product.sex === 'women' && product.clothes === 'suits'),
  // },
  // {
  //   title: 'Жилеты',
  //   sex: 'women',
  //   clothes: 'vests',
  //   link: '/catalog/women/vests',
  //   items: products.filter((product: iProduct) => product.sex === 'women' && product.clothes === 'vests'),
  // },
];
