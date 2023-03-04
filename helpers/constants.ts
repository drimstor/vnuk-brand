import Image from 'next/image';
import vkIcon from '@/ui-kit/Other/vk.svg';

export const PORT = process.env.NEXT_PUBLIC_HOSTNAME || 'http://localhost:3000';


export const navList = [
  {
    name: 'Женское',
    link: '#',
    subList: [
      {
        name: 'Платья',
        link: '#',
      },
      {
        name: 'Блузы',
        link: '#',
      },
      {
        name: 'Жакеты',
        link: '#',
      },
      {
        name: 'Юбки',
        link: '#',
      },
      {
        name: 'Купальники',
        link: '#',
      },
      {
        name: 'Топы',
        link: '#',
      },
    ],
  },
  {
    name: 'Мужское',
    link: '#',
    subList: [
      {
        name: 'Куртки',
        link: '#',
      },
      {
        name: 'Футболки',
        link: '#',
      },
      {
        name: 'Джинсы',
        link: '#',
      },
      {
        name: 'Рубашки',
        link: '#',
      },
    ],
  },
  {
    name: 'Аксессуары',
    link: '#',
    subList: [
      {
        name: 'Ремни',
        link: '#',
      },
      {
        name: 'Броши',
        link: '#',
      },
      {
        name: 'Подвески',
        link: '#',
      },
      {
        name: 'Косметички',
        link: '#',
      },
    ],
  },
  {
    name: 'Сумки',
    link: '#',
    subList: [
      {
        name: 'Клатчи',
        link: '#',
      },
      {
        name: 'Пляжные сумки',
        link: '#',
      },
      {
        name: 'Вечерние сумки',
        link: '#',
      },
    ],
  },
];

export const footerLinks = [
  {
    title: 'Информация',
    links: [
      {
        name: 'Оферта',
        link: '#',
      },
      {
        name: 'Контакты',
        link: '#',
      },
      {
        name: 'Политика конфиденциальности',
        link: '#',
      },
    ],
  },
  {
    title: 'Покупателям',
    links: [
      {
        name: 'Правила покупки',
        link: '#',
      },
      {
        name: 'Доставка',
        link: '#',
      },
      {
        name: 'Обмен и возврат',
        link: '#',
      },
      {
        name: 'Таблица размеров',
        link: '#',
      },
      {
        name: 'Уход',
        link: '#',
      },
    ],
  },
  {
    title: 'Контакты',
    links: [
      {
        name: vkIcon,
        link: '#',
      },
    ],
  },
];
