import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Sozially</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logow.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
