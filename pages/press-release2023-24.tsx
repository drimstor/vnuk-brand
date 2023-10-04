import Layout from '@/components/Layout/Layout';
import React from 'react';
import s from '/styles/pressRelease.module.scss';
import clsx from 'clsx';
import vnukLogo from 'public/font_rend.png';
import Image from 'next/image';

const pressRelease = () => {
  return (
    <Layout pageTitle="Press release collection 2024 - VNUK">
      <div className={clsx(s.wrapper)}>
        <div className={s.vnukLogo}>
          {/* <span>VNUK</span> */}
          <Image src={vnukLogo} width={400} alt="vnuk" />
        </div>
        <h1>Press release.</h1>
        <p>
          <span>VNUK</span> - российский бренд, созданный как противоположность всем серым и обыденным коммерческим
          брендам одежды, который несёт в себе яркость, наряду с инфантильностью, но остаётся комфортным и статусным для
          своих обладателей. Эта история для молодых девушек и парней от 20 до 30 лет, которые любят быть в центре
          внимания и сочетают в своих образах интеллект и самобытность.
          <br />
          <br /> В этом году <span>VNUK</span> подготовил новую, вдохновляющую, сияющую коллекцию осень-зима для
          Московской недели моды 2023-2024, которая пройдёт в рамках международного форума BRICS+ Fashion Summit с 28
          ноября по 2 декабря этого года.
          <br />
          <br /> Вдохновлением новой коллекции бренда следующего года стали домашние вечеринки, в сочетании с блеском
          серебра и цветными пайетками. Яркие цвета в сочетании с элегантным чёрным, обилие мягких фактур это то, с чем
          хочет познакомить нас бренд в этом сезоне. Наилучшими материалами для передачи праздника стали: мех, пайетки,
          бархат, страусиные перья и кожа.
        </p>
      </div>
    </Layout>
  );
};

export default pressRelease;
