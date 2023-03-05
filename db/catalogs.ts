import { iCatalog, iProduct } from '@/helpers/types';
import { products } from './products';

export const catalogs: iCatalog[] = [
  {
    title: 'Платья',
    sex: 'women',
    clothes: 'dresses',
    link: 'catalog/women/dresses',
    items: products.filter((product: iProduct) => product.sex === 'women' && product.clothes === 'dresses'),
  },
  {
    title: 'Блузки',
    sex: 'women',
    clothes: 'blouses',
    link: 'catalog/women/blouses',
    items: products.filter((product: iProduct) => product.sex === 'women' && product.clothes === 'blouses'),
  },
];
