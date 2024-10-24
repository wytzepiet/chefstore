/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.chefstore.nl",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
