/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Enable standalone build for Docker optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
