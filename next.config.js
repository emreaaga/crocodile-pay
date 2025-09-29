const createNextIntlPlugin = require('next-intl/plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dribbble.com"],
  },
};

module.exports = createNextIntlPlugin()(nextConfig);
