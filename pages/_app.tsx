import '../styles/tailwind.css';
import '../styles/Landing.css';
import '../styles/globals.css';
import '../styles/Weather.css';
import '@fortawesome/fontawesome-free/css/all.css';
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap" rel="stylesheet" />

        <script src="https://kit.fontawesome.com/05f3c4b592.js" crossOrigin="anonymous"></script>

        <title>Hackademy Week 5</title>
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
