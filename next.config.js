/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    unoptimized: true,
  },
  // For static export (optional, uncomment if needed)
  // output: 'export',
}

module.exports = nextConfig
