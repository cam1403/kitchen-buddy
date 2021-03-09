/** @jsx jsx */ /** @jsxRuntime classic */
import { Card, jsx } from 'theme-ui';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kitchen Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div sx={{ variant: 'containers.page' }}>
        <h1 sx={{ variant: 'containers.page.heading' }}>Kitchen Tracker</h1>
        <p>Taking the shopping list to the next level</p>
      </div>
    </div>
  );
}
