import 'bootstrap/dist/css/bootstrap.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/css/main.css';
import '../public/css/no-animations.css'; // Import the no-animations CSS to override transitions
import '../public/css/optimized-images.css'; // Import CSS for optimized images
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
