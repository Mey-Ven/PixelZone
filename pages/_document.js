import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/bootstrap-icons.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical assets */}
        <link rel="preload" href="/img/background.webp" as="image" />

        {/* Meta tags for better mobile performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" />
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />

        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Critical CSS for image loading */
          img {
            max-width: 100%;
            height: auto;
          }
          .optimized-image-container {
            position: relative;
            overflow: hidden;
            background-color: #f0f0f0;
          }
          @media (max-width: 767px) {
            img[loading="lazy"] {
              transition: opacity 0.2s;
            }
          }
        `}} />

        {/* Remove any inline styles with --main--position-- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove any inline styles with --main--position--
              document.addEventListener('DOMContentLoaded', function() {
                document.documentElement.removeAttribute('style');
              });
            `,
          }}
        />
      </Head>
      <body suppressHydrationWarning>
        <Main />
        <NextScript />

        {/* Scripts d'optimisation d'images */}
        <script
          src="/js/image-optimizer.js"
          async
          defer
        />
        <script
          src="/js/image-preloader.js"
          async
          defer
        />
        <script
          src="/js/progressive-loading.js"
          async
          defer
        />
      </body>
    </Html>
  )
}
