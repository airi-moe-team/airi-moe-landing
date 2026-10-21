import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/airi-moe-landing",
  assetPrefix: "/airi-moe-landing/",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;