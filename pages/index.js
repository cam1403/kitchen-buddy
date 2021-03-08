import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kitchen Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Kitchen Tracker</h1>
      <p>Add your food to track what you have</p>
    </div>
  );
}
