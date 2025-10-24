/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  output: 'standalone', // Включаем standalone режим для Docker
  // output: 'export',
  // distDir: '_static',
  // images: {
  //   unoptimized: true,
  // },
};

module.exports = nextConfig;
