import CatalogBox from '@/components/Catalog/CatalogBox/CatalogBox';
import CatalogLayout from '@/components/Layout/CatalogLayout';
import Layout from '@/components/Layout/Layout';
import React from 'react';
import { iCatalog } from '@/helpers/types';
import { catalogs } from '@/db/catalogs';

interface CatalogProps {
  catalogs: iCatalog[];
}

function Catalog({ catalogs }: CatalogProps) {
  return (
    <Layout pageTitle="Каталог">
      <CatalogLayout title="Каталог">
        {catalogs.map((catalog, index) => (
          <CatalogBox title={catalog.title} items={catalog.items} link={catalog.link} isShortVariant key={index} />
        ))}
      </CatalogLayout>
    </Layout>
  );
}

export default Catalog;

export async function getStaticProps() {
  return {
    props: {
      catalogs,
    },
  };
}
