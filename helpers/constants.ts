import { catalogs } from '@/db/catalogs';
import vkIcon from '@/ui-kit/Other/vk.svg';
import instIcon from '@/ui-kit/Other/instagram.svg';
import phoneIcon from '@/ui-kit/Other/phone.svg';

export const navList = [
  {
    title: 'Женское',
    link: '#',
    subList: catalogs.filter((item) => item.sex === 'women'),
  },
  {
    title: 'Мужское',
    link: '#',
    subList: catalogs.filter((item) => item.sex === 'men'),
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
        name: phoneIcon,
        link: 'tel:+7 (918) 184-06-93',
      },
      {
        name: instIcon,
        link: 'https://www.instagram.com/vnukbrand/',
      },
      {
        name: vkIcon,
        link: '#',
      },
    ],
  },
];
