import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/demo/raumkontrast",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet",
          },
        ],
      },
      {
        source: "/demo/raumkontrast/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // THE GERMAN offline — Code bleibt. Online: Block entfernen + GERMAN_DEMO_LIVE = true
      {
        source: "/demo/the-german",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/demo/the-german/:path*",
        destination: "/404",
        permanent: false,
      },
      // Alte Client-Assets der Garten-Demo — nie wieder ausliefern
      {
        source: "/demo/garten/marius-portrait.jpg",
        destination: "/404",
        permanent: true,
      },
      {
        source: "/demo/garten/marius-arbeit.jpg",
        destination: "/404",
        permanent: true,
      },
      {
        source: "/demo/garten/logo-mark.png",
        destination: "/404",
        permanent: true,
      },
      {
        source: "/demo/garten/logo-schriftzug.png",
        destination: "/404",
        permanent: true,
      },
      {
        source: "/demo/garten/einzugsgebiet.jpg",
        destination: "/404",
        permanent: true,
      },
      {
        source: "/demo/gartenpflege-friedberg",
        destination: "/404",
        permanent: true,
      },
      {
        source: "/demo/gartenpflege-friedberg/:path*",
        destination: "/404",
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
