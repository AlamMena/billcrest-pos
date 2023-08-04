/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["cdn-icons-png.flaticon.com", "api-prod-minimal-v510.vercel.app"],
  },
};

module.exports = nextConfig;
