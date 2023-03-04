import React from 'react';
import CatalogBox from '@/components/Catalog/CatalogBox/CatalogBox';
import CatalogLayout from '@/components/Layout/CatalogLayout';
import Layout from '@/components/Layout/Layout';
import { iCatalog } from '@/helpers/types';
import { sexValues } from '@/pages/api/catalog';
import BackButton from '@/ui-kit/Buttons/BackButton';

interface SubCatalogProps {
  currentCatalog?: iCatalog;
}

function SubCatalog({ currentCatalog }: SubCatalogProps) {
  return (
    <Layout>
      <BackButton isOnlyDesktop />
      <CatalogLayout title={currentCatalog?.title}>
        <CatalogBox items={currentCatalog?.items} />
      </CatalogLayout>
    </Layout>
  );
}

export default SubCatalog;

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/catalog');
  const catalogs = await res.json();

  const paths = sexValues.flatMap((sex) => {
    return catalogs.map((catalog: iCatalog) => ({
      params: { sex, clothes: catalog.clothes },
    }));
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch('http://localhost:3000/api/catalog');
  const catalogs = await res.json();
  const currentCatalog = catalogs.filter(
    (catalog: iCatalog) => catalog.clothes === params.clothes && catalog.sex === params.sex
  )[0];

  return {
    props: {
      currentCatalog,
    },
  };
}
