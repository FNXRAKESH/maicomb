/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = {
  trailingSlash: true,
  ...nextConfig,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/contact": { page: "/contact" },
      "/about": { page: "/about" },
      "/services": { page: "/services" },
      "/product": { page: "/product" },
      "/hair-extension-scalp-care": { page: "/hair-extension-scalp-care" },
      "/order-now": { page: "/order-now" },
    };
  },
};
