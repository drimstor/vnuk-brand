import { StaticImageData } from 'next/image';

export interface iProduct {
  id: number;
  title: string;
  price: string;
  link: string;
  images: StaticImageData[];
  clothes: string;
  sex: string;
  description: string;
}

export interface iCatalog {
  title: string;
  clothes: string;
  sex: string;
  link: string;
  items: iProduct[];
}
