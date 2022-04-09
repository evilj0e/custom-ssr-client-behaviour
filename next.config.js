/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/topic/homemade-hot-dogs',
        permanent: true,
      },
      {
        source: '/topic',
        destination: '/topic/homemade-hot-dogs',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
