import React from 'react';
import CatalogBox from '@/components/Catalog/CatalogBox/CatalogBox';
import CatalogLayout from '@/components/Layout/CatalogLayout';
import Layout from '@/components/Layout/Layout';
import { iCatalog } from '@/helpers/types';
import BackButton from '@/ui-kit/Buttons/BackButton';
import { catalogs } from '@/db/catalogs';
import { sexValues } from '@/db/products';

interface SubCatalogProps {
  currentCatalog?: iCatalog;
}

function SubCatalog({ currentCatalog }: SubCatalogProps) {
  return (
    <Layout pageTitle={currentCatalog?.title}>
      <BackButton isOnlyDesktop />
      <CatalogLayout title={currentCatalog?.title}>
        <CatalogBox items={currentCatalog?.items} />
      </CatalogLayout>
    </Layout>
  );
}

export default SubCatalog;

export async function getStaticPaths() {
  const paths = sexValues.flatMap((sex) => {
    return catalogs.map((catalog: iCatalog) => {
      return {
        params: { sex: catalog.sex, clothes: catalog.clothes },
      };
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { sex, clothes } = params;

  const currentCatalog = catalogs.filter((catalog: iCatalog) => catalog.clothes === clothes && catalog.sex === sex)[0];

  return {
    props: {
      currentCatalog,
    },
  };
}
