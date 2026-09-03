import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/demo/the-german/index.html",
        destination: "/demo/the-german",
        permanent: true,
      },
      {
        source: "/demo/the-german/dental-care-bali.html",
        destination: "/demo/the-german/dental-care-bali",
        permanent: true,
      },
      {
        source: "/demo/the-german/orthodontics-bali.html",
        destination: "/demo/the-german/orthodontics-bali",
        permanent: true,
      },
      {
        source: "/demo/the-german/skin-aesthetics-dermatology-bali.html",
        destination: "/demo/the-german/skin-aesthetics-dermatology-bali",
        permanent: true,
      },
      {
        source: "/demo/the-german/skin-aesthetics-bali.html",
        destination: "/demo/the-german/skin-aesthetics-dermatology-bali",
        permanent: true,
      },
      {
        source: "/demo/the-german/technology.html",
        destination: "/demo/the-german/technology",
        permanent: true,
      },
      {
        source: "/demo/the-german/about-us.html",
        destination: "/demo/the-german/about-us",
        permanent: true,
      },
      {
        source: "/demo/the-german/home-1.html",
        destination: "/demo/the-german",
        permanent: true,
      },
    ];
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    qualities: [75, 90, 92, 95, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
