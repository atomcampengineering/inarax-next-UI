import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      // Prototype imagery (hero illustrations, logo) is still served from
      // the Stitch mockups' Google-hosted URLs; allow next/image to
      // optimize them until they're replaced with real assets.
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
