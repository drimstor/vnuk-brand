import item1img1 from '@/public/products/sequin-dress/img1.png';
import item1img2 from '@/public/products/sequin-dress/img2.png';
import item1img3 from '@/public/products/sequin-dress/img3.png';
import item1img4 from '@/public/products/sequin-dress/img4.png';
import item1img5 from '@/public/products/sequin-dress/img5.png';
import item1color from '@/public/products/sequin-dress/color.png';
import item2img1 from '@/public/products/black-velvet-dress/img1.png';
import item2img2 from '@/public/products/black-velvet-dress/img2.png';
import item2img3 from '@/public/products/black-velvet-dress/img3.png';
import item2img4 from '@/public/products/black-velvet-dress/img4.png';
import blackColor from '@/public/materals/blackColor.png';
import velvet from '@/public/materals/velvet.png';
import item3img1 from '@/public/products/leather-shirt/img1.png';
import item3img2 from '@/public/products/leather-shirt/img2.png';
import item3img3 from '@/public/products/leather-shirt/img3.png';
import item3img4 from '@/public/products/leather-shirt/img4.png';
import item3material from '@/public/products/leather-shirt/material.png';
import item4img1 from '@/public/products/white-bodysuit/img1.png';
import item4img2 from '@/public/products/white-bodysuit/img2.png';
import item4img3 from '@/public/products/white-bodysuit/img3.png';
import item4img4 from '@/public/products/white-bodysuit/img4.png';
import whiteColor from '@/public/materals/whiteColor.png';
import item4material from '@/public/products/white-bodysuit/material.png';
import item5img1 from '@/public/products/black-bodysuit/img1.png';
import item5img2 from '@/public/products/black-bodysuit/img2.png';
import item6img1 from '@/public/products/black-skirt/img1.png';
import item6img2 from '@/public/products/black-skirt/img2.png';
import item6img3 from '@/public/products/black-skirt/img3.png';
import item7color from '@/public/products/red-fur-coat/color.png';
import item7material from '@/public/products/red-fur-coat/material.png';
import item7color2 from '@/public/products/red-fur-coat/color2.png';
import item7material2 from '@/public/products/red-fur-coat/material2.png';
import item7img1 from '@/public/products/red-fur-coat/img1.png';
import item7img2 from '@/public/products/red-fur-coat/img2.png';
import item7img3 from '@/public/products/red-fur-coat/img3.png';
import item7_2img1 from '@/public/products/red-fur-coat/2img1.png';
import item7_2img2 from '@/public/products/red-fur-coat/2img2.png';
import item7_2img3 from '@/public/products/red-fur-coat/2img3.png';
import item7_2img4 from '@/public/products/red-fur-coat/2img4.png';
import item7_2img5 from '@/public/products/red-fur-coat/2img5.png';
import item7_2img6 from '@/public/products/red-fur-coat/2img6.png';
import item8img1 from '@/public/products/camouflage-trench-coat/img1.png';
import item8img2 from '@/public/products/camouflage-trench-coat/img2.png';
import item8img3 from '@/public/products/camouflage-trench-coat/img3.png';
import item8material from '@/public/products/camouflage-trench-coat/material.png';
import item9img1 from '@/public/products/black-print-jacket/img1.png';
import item9img2 from '@/public/products/black-print-jacket/img2.png';
import item9img3 from '@/public/products/black-print-jacket/img3.png';
import item9img4 from '@/public/products/black-print-jacket/img4.png';
import item9color from '@/public/products/black-print-jacket/color.png';
import item11img1 from '@/public/products/red-bodysuit/img1.png';
import item11img2 from '@/public/products/red-bodysuit/img2.png';
import item11img3 from '@/public/products/red-bodysuit/img3.png';
import item11img4 from '@/public/products/red-bodysuit/img4.png';
import item11img5 from '@/public/products/red-bodysuit/img5.png';
import item11color from '@/public/products/red-bodysuit/color.png';
import item12img1 from '@/public/products/sequin-silver-dress/img1.png';
import item12img2 from '@/public/products/sequin-silver-dress/img2.png';
import item12img3 from '@/public/products/sequin-silver-dress/img3.png';
import item12img4 from '@/public/products/sequin-silver-dress/img4.png';
import item12img5 from '@/public/products/sequin-silver-dress/img5.png';
import item12img6 from '@/public/products/sequin-silver-dress/img6.png';
import item12img7 from '@/public/products/sequin-silver-dress/img7.png';
import item12color from '@/public/products/sequin-silver-dress/color.png';

import item13img1 from '@/public/products/long-coat-print/img1.png';
import item13img2 from '@/public/products/long-coat-print/img2.png';
import item13img3 from '@/public/products/long-coat-print/img3.png';
import item13img4 from '@/public/products/long-coat-print/img4.png';
import item13img5 from '@/public/products/long-coat-print/img5.png';
import item13color from '@/public/products/long-coat-print/color.png';
import item14img1 from '@/public/products/black-velvet-suit/img1.png';
import item14img2 from '@/public/products/black-velvet-suit/img2.png';
import item14img3 from '@/public/products/black-velvet-suit/img3.png';
import item14img4 from '@/public/products/black-velvet-suit/img4.png';

import { iProduct } from '@/helpers/types';

export const sexValues = ['men', 'women'];

export const products: iProduct[] = [
  {
    id: 1,
    title: 'Платье Collection 2023 (MBFW)',
    description: 'Платье с пайетками на чёрном хлопке',
    price: '65 000',
    sex: 'women',
    color: { name: 'Разноцветный', color: item1color },
    material: { name: 'Пайетки/Хлопок', material: item1color },
    sizes: ['хs/s'],
    clothes: 'dresses',
    link: '/product/sequin-dress',
    images: [item1img1, item1img2, item1img3, item1img4, item1img5],
  },
  {
    id: 2,
    title: 'Платье Black Velvet с перчатками',
    description: 'Платье из бархата со страусиным пером',
    price: '34 000',
    sex: 'women',
    color: { name: 'Чёрный', color: blackColor },
    material: { name: 'Бархат', material: velvet },
    sizes: ['хs', 's', 'm'],
    clothes: 'dresses',
    link: '/product/black-velvet-dress',
    images: [item2img1, item2img2, item2img3, item2img4],
  },
  {
    id: 3,
    title: 'Рубашка',
    description: 'Кожаная рубашка',
    price: '34 000',
    sex: 'men',
    color: { name: 'Шоколад', color: item3material },
    material: { name: 'Экокожа', material: item3material },
    sizes: ['s', 'm', 'l'],
    clothes: 'shirts',
    link: '/product/leather-shirt',
    images: [item3img1, item3img2, item3img3, item3img4],
  },
  {
    id: 4,
    title: 'Боди',
    description: 'Боди из тонкого хлопкового трикотажа',
    price: '12 800',
    sex: 'women',
    color: { name: 'Белый', color: whiteColor },
    material: { name: 'Трикотаж', material: item4material },
    sizes: ['хs/s', 'm'],
    clothes: 'bodysuits',
    link: '/product/white-bodysuit',
    images: [item4img1, item4img2, item4img3, item4img4],
  },
  {
    id: 5,
    title: 'Боди Black Velvet Puff Sleeve',
    description: 'Бархатное боди с рукавом буфом и дополнительной бархатной съёмной юбкой',
    price: '18 900',
    sex: 'women',
    color: { name: 'Чёрный', color: blackColor },
    material: { name: 'Бархат', material: velvet },
    sizes: ['хs/s', 'm'],
    clothes: 'bodysuits',
    link: '/product/black-bodysuit',
    images: [item5img1, item5img2],
  },
  {
    id: 6,
    title: 'Юбка Black Velvet',
    description: 'Бархатная съемная юбка на завязках',
    price: '11 900',
    sex: 'women',
    color: { name: 'Чёрный', color: blackColor },
    material: { name: 'Бархат', material: velvet },
    sizes: ['хs/m'],
    clothes: 'skirts',
    link: '/product/black-skirt',
    images: [item6img1, item6img2, item6img3],
  },
  {
    id: 7,
    title: 'Шуба',
    description: 'Шуба под норку с коротким ворсом и шелковым подкладом',
    price: '48 000',
    sex: 'women',
    color: { name: 'Красный', color: item7color },
    material: { name: 'Экомех норка', material: item7material },
    sizes: ['хs/m'],
    clothes: 'fur-coats',
    link: '/product/red-fur-coat',
    images: [item7_2img1, item7_2img2, item7_2img3, item7_2img4, item7_2img5, item7_2img6],
  },
  {
    id: 8,
    title: 'Тренч',
    description: 'Лёгкий тренч из непромокаемой плащевой ткани в камуфляжном цвете',
    price: '45 000',
    sex: 'men',
    color: { name: 'Камуфляж', color: item8material },
    material: { name: 'Плащевая ткань/Вискоза', material: item8material },
    sizes: ['s/m/l'],
    clothes: 'trench-coats',
    link: '/product/camouflage-trench-coat',
    images: [item8img1, item8img2, item8img3],
  },
  {
    id: 9,
    title: 'Куртка',
    description: 'Хлопковая куртка с чёрным принтом',
    price: '34 000',
    sex: 'women',
    color: { name: 'Бежевый', color: item9color },
    material: { name: 'Хлопок/Вискоза', material: item9color },
    sizes: ['xs/m'],
    clothes: 'jackets',
    link: '/product/black-print-jacket',
    images: [item9img1, item9img2, item9img3, item9img4],
  },
  {
    id: 10,
    title: 'Джоггеры',
    description: 'Зеленые джоггеры',
    price: '18 000',
    sex: 'women',
    color: { name: 'Зеленый', color: item7color2 },
    material: { name: 'Хлопковый трикотаж', material: item7material2 },
    sizes: ['xs', 's', 'm'],
    clothes: 'joggers',
    link: '/product/green-joggers',
    images: [item7img1, item7img2, item7img3],
  },
  {
    id: 11,
    title: 'Боди',
    description: 'Боди из тонкого хлопкового трикотажа',
    price: '12 800',
    sex: 'women',
    color: { name: 'Красный', color: item11color },
    material: { name: 'Трикотаж', material: item4material },
    sizes: ['хs', 's', 'm'],
    clothes: 'bodysuits',
    link: '/product/red-bodysuit',
    images: [item11img1, item11img2, item11img3, item11img4, item11img5],
  },
  {
    id: 12,
    title: 'Платье collection 2023 (MBFW) Silver',
    description: 'Платье с пайетками на тонком шерстяном трикотаже',
    price: '48 000',
    sex: 'women',
    color: { name: 'Серебро', color: item12color },
    material: { name: 'Шерстяной трикотаж с пайетками', material: item12color },
    sizes: ['хs/s'],
    clothes: 'dresses',
    link: '/product/sequin-silver-dress',
    images: [item12img1, item12img2, item12img3, item12img4, item12img5, item12img6, item12img7],
  },
  {
    id: 13,
    title: 'Шуба Long Coat Print',
    description: 'Шуба под норку с коротким ворсом и принтом на шелковом подкладе',
    price: '45 000',
    sex: 'women',
    color: { name: 'Леопард', color: item13color },
    material: { name: 'Экомех норка', material: item1color },
    sizes: ['хs/m'],
    clothes: 'fur-coats',
    link: '/product/long-coat-print',
    images: [item13img1, item13img2, item13img3, item13img4, item13img5],
  },
  {
    id: 14,
    title: 'Костюм Black Velvet Silk',
    description: 'Бархатный костюм на натуральном шелке',
    price: '36 000',
    sex: 'men',
    color: { name: 'Чёрный', color: blackColor },
    material: { name: 'Шелковый бархат', material: item1color },
    sizes: ['m', 'l', 'xl'],
    clothes: 'suits',
    link: '/product/black-velvet-suit',
    images: [item14img1, item14img2, item14img3, item14img4],
  },
];
