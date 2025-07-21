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
  
  // Optional: Configure base path if deploying to a subdirectory
  // Uncomment and modify if deploying to https://username.github.io/repository-name/
  // basePath: '/repository-name',
  // assetPrefix: '/repository-name/',
};

export default nextConfig;
