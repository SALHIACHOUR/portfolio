import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/portfolio',   // nom exact de ton repo GitHub
    assetPrefix: '/portfolio/',
    images: { unoptimized: true}
  /* config options here */
};

export default nextConfig;
