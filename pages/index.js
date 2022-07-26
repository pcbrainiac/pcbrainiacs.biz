import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>PC Brainiacs - Serving Detroit and Metro Area</title>
        <meta
          name="description"
          content="PC Brainiacs is geared to investing in the clients and their issues where the problems becomes what we resolve."
        />
        <link rel="canonical" href="https://www.pcbrainiacs.biz/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mt-5 px-[5%]">
        <h1 className="text-3xl font-bold text-secondary shadow-lg">Home</h1>
      </div>
    </div>
  );
}
