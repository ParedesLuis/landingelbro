/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  optimizeFonts: false,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
}

module.exports = nextConfig
