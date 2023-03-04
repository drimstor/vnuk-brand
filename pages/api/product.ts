import { iProduct } from '@/helpers/types';
import item1img1 from '@/public/products/item1-1.png';
import item1img2 from '@/public/products/item1-2.png';
import item1img3 from '@/public/products/item1-3.png';
import item1img4 from '@/public/products/item1-4.png';
import item2img1 from '@/public/products/item2-1.png';
import item2img2 from '@/public/products/item2-2.png';
import item2img3 from '@/public/products/item2-3.png';
import item3img1 from '@/public/products/item3-1.png';
import item3img2 from '@/public/products/item3-2.png';
import item4img1 from '@/public/products/item4-1.png';
import item4img2 from '@/public/products/item4-2.png';
import item5img1 from '@/public/products/item5-1.png';
import item5img2 from '@/public/products/item5-2.png';
import item6img1 from '@/public/products/item6-1.png';
import item6img2 from '@/public/products/item6-2.png';
import { NextApiRequest, NextApiResponse } from 'next';
export const sexValues = ['men', 'women'];

export default function productHandler(req: NextApiRequest, res: NextApiResponse) {
  // console.log(req.query);
  const products: iProduct[] = [
    {
      id: 1,
      title: 'Платье',
      description: 'Платье из крепа',
      price: '250 000',
      sex: 'women',
      clothes: 'dresses',
      link: '/product/black-dress',
      images: [item1img1, item1img2, item1img3, item1img4],
    },
    {
      id: 2,
      title: 'Платье',
      description: 'Платье из вискозного трикотажа',
      price: '55 000',
      sex: 'women',
      clothes: 'dresses',
      link: '/product/blue-dress',
      images: [item2img1, item2img2, item2img3],
    },
    {
      id: 3,
      title: 'Блуза',
      description: 'Укороченная блуза с короткими рукавами',
      price: '45 000',
      sex: 'women',
      clothes: 'blouses',
      link: '/product/black-blouse',
      images: [item3img1, item3img2],
    },
    {
      id: 4,
      title: 'Блуза',
      description: 'Укороченная блуза с короткими рукавами',
      price: '45 000',
      sex: 'women',
      clothes: 'blouses',
      link: '/product/green-blouse',
      images: [item4img1, item4img2],
    },
    {
      id: 5,
      title: 'Блуза',
      description: 'Укороченная блуза с короткими рукавами',
      price: '45 000',
      sex: 'women',
      clothes: 'blouses',
      link: '/product/white-blouse',
      images: [item5img1, item5img2],
    },
    {
      id: 6,
      title: 'Блуза',
      description: 'Укороченная блуза с короткими рукавами',
      price: '45 000',
      sex: 'women',
      clothes: 'blouses',
      link: '/product/red-blouse',
      images: [item6img1, item6img2],
    },
    {
      id: 7,
      title: 'Блуза',
      description: 'Укороченная блуза с короткими рукавами',
      price: '45 000',
      sex: 'women',
      clothes: 'blouses',
      link: '/product/black-blouse',
      images: [item3img1, item3img2],
    },
    {
      id: 8,
      title: 'Блуза',
      description: 'Укороченная блуза с короткими рукавами',
      price: '45 000',
      sex: 'women',
      clothes: 'blouses',
      link: '/product/green-blouse',
      images: [item4img1, item4img2],
    },
    {
      id: 9,
      title: 'Блуза',
      description: 'Укороченная блуза с короткими рукавами',
      price: '45 000',
      sex: 'women',
      clothes: 'blouses',
      link: '/product/white-blouse',
      images: [item5img1, item5img2],
    },
  ];
  res.status(200).json(products);
}
