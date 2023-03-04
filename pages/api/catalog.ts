import { iCatalog, iProduct } from '@/helpers/types';
import { NextApiRequest, NextApiResponse } from 'next';
export const sexValues = ['men', 'women'];

export default async function catalogHandler(req: NextApiRequest, res: NextApiResponse) {
  // console.log(req.query);
  const newRes = await fetch('http://localhost:3000/api/product');
  const products = await newRes.json();

  const catalogs: iCatalog[] = [
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
  res.status(200).json(catalogs);
}
