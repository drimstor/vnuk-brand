import CardInfo from '@/components/Product/CardInfo/CardInfo';
import CardSlider from '@/components/Product/CardSlider/CardSlider';
import Layout from '@/components/Layout/Layout';
import React from 'react';
import { iCatalog, iProduct } from '@/helpers/types';
import { PORT } from '@/helpers/constants';
import axios from 'axios';

interface ProductProps {
  currentProduct: iProduct;
}

function Product({ currentProduct }: ProductProps) {
  return (
    <Layout isWithoutFooter isHeaderAnimation>
      <CardSlider images={currentProduct.images} />
      <CardInfo product={currentProduct} />
    </Layout>
  );
}

export default Product;

export async function getStaticPaths() {
  const res = await axios.get(`/api/product`);
  const products = await res.data;

  const paths = products.map((product: iCatalog) => ({
    params: { id: product.link.split('/').pop() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const res = await axios.get(`/api/product`);
  const products = await res.data;
  const currentProduct = products.filter((product: iCatalog) => product.link.split('/').pop() === params.id)[0];

  return {
    props: {
      currentProduct,
    },
  };
}
