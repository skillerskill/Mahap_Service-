import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  allowedDevOrigins: ['192.168.56.1'],
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'swiper/react': path.resolve(__dirname, 'node_modules/swiper/swiper-react.mjs'),
    };
    return config;
  },
};

export default nextConfig;