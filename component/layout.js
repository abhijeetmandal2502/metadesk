import Head from 'next/head';
// import Headroom from 'react-headroom'
import React from 'react';
import Footer from './menu/Footer';
import Navbar from './menu/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>Metadesk</Head>
      {/* <Headroom> */}
      <Navbar />
      {/* </Headroom> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
