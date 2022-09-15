/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.slid.cc', 'api.producthunt.com'],
  },
  swcMinify: true,
};

module.exports = nextConfig;
