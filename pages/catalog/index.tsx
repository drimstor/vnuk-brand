import CatalogBox from '@/components/Catalog/CatalogBox/CatalogBox';
import CatalogLayout from '@/components/Layout/CatalogLayout';
import Layout from '@/components/Layout/Layout';
import React from 'react';
import { iCatalog, iProduct } from '@/helpers/types';

interface CatalogProps {
  catalogs: iCatalog[];
}

function Catalog({ catalogs }: CatalogProps) {
  return (
    <Layout>
      <CatalogLayout title="Каталог">
        {catalogs &&
          catalogs.map((catalog, index) => (
            <CatalogBox title={catalog.title} items={catalog.items} link={catalog.link} isShortVariant key={index} />
          ))}
      </CatalogLayout>
    </Layout>
  );
}

export default Catalog;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/catalog');
  const catalogs = await res.json();

  return {
    props: {
      catalogs,
    },
  };
}
