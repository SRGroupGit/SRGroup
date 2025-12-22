/** @type {import('next').NextConfig} */

// const nextConfig = {
//   images: {
//     domains: ['admin.sreddygroup.com'],
//   },
// };

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.sreddygroup.com',
      },
    ],
  },
};

export default nextConfig;
