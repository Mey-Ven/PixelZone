/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    domains: [],
  },

  // Compression
  compress: true,

  // Production only settings
  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      // Remove console.log in production
      removeConsole: {
        exclude: ['error', 'warn'],
      },
      // Enable React optimizations
      reactRemoveProperties: true,
    },
    experimental: {
      // Enable optimizations
      optimizePackageImports: ['react-icons', 'date-fns', 'lodash'],
      // Reduce bundle size
      modularizeImports: {
        'react-icons': {
          transform: 'react-icons/{{member}}',
        },
      },
    },
  }),

  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Optimize CSS
    if (!dev && !isServer) {
      // Enable tree shaking for CSS
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.(css|scss)$/,
        chunks: 'all',
        enforce: true,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
