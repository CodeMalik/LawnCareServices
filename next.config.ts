import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // Optionally restrict to specific pathnames:
        // pathname: '/dfnjpfucl/image/upload/**',
      },
    ],
    // You can also use the older domains format (still works in Next.js 15):
    // domains: ['res.cloudinary.com'],
  },
  /* config options here */
};

export default nextConfig;
