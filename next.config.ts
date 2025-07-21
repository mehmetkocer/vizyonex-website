import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  
  // Skip build-time bundling of 'server-only' packages
  serverExternalPackages: [],
  
  // Configure base path for GitHub Pages deployment
  basePath: '/vizyonex-website',
  assetPrefix: '/vizyonex-website/',
};

export default nextConfig;
