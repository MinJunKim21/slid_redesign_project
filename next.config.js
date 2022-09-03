/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.slid.cc'],
  },
  swcMinify: true,
};

module.exports = nextConfig;
