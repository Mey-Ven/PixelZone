import 'bootstrap/dist/css/bootstrap.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/css/main.css';
import '../public/css/no-animations.css'; // Import the no-animations CSS to override transitions
import '../public/css/optimized-images.css'; // Import CSS for optimized images
import '../public/css/stats-custom.css'; // Import custom CSS for Stats section
import '../app/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
