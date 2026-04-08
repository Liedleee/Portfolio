/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    '@react-email/render',
  ],
  // Jika nanti mau aktifkan images remotePatterns, pindahkan keluar dari experimental:
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'cdn.jsdelivr.net',
  //     },
  //   ],
  // },
};

module.exports = nextConfig;