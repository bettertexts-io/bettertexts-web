/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
};

module.exports = withPlausibleProxy()({
  ...nextConfig,
});
