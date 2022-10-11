import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - NextMall' : 'NextMall'}</title>
        <meta name="description" content="Nextjs Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h h-screen justify-between">
        <header>
          <nav className="flex bg-slate-200 h-12 items-center justify-between shadow-md px-4">
            <Link href="/">
              <a className="text-lg font-bold">NextMall</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">login</a>
              </Link>
              <Link href="/inter">
                <a className="p-2">자기소개</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto px-4">{children}</main>
        <footer className="flex h-10 bg-red-100 justify-center items-center shadow-inner">
          <p> copyright &copy; 2022 nextmall</p>
        </footer>
      </div>
    </>
  );
}
