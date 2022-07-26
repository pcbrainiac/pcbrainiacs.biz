import Head from 'next/head';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - PC BRAINIACS' : 'PC BRAINIACS'}</title>
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>header</header>
        <main className="grow">{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}
