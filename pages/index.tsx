import HomeImages from '@/components/HomeImages/HomeImages';
import Layout from '@/components/Layout/Layout';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout pageTitle="VNUK BRAND">
      <HomeImages />
    </Layout>
  );
}
