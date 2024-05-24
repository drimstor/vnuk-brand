import CardInfo from '@/components/Product/CardInfo/CardInfo';
import CardSlider from '@/components/Product/CardSlider/CardSlider';
import Layout from '@/components/Layout/Layout';
import React from 'react';
import { iCatalog, iProduct } from '@/helpers/types';
import { products } from '@/db/products';
import { GetStaticProps } from 'next';

interface ProductProps {
  currentProduct: iProduct;
}

function Product({ currentProduct }: ProductProps) {
  return (
    <Layout isWithoutFooter isHeaderAnimation pageTitle={currentProduct?.title}>
      <CardSlider images={currentProduct.images} />
      <CardInfo product={currentProduct} />
    </Layout>
  );
}

export default Product;

export async function getStaticPaths() {
  const paths = products.map((product: iCatalog | iProduct) => ({
    params: { id: product.link.split('/').pop() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<
  { currentProduct: iCatalog | iProduct | Record<string, unknown> },
  { id: string }
> = async ({ params }) => {
  const currentProduct =
    products.filter((product: iCatalog | iProduct) => product.link.split('/').pop() === params?.id)[0] || {};

  return {
    props: {
      currentProduct,
    },
  };
};
