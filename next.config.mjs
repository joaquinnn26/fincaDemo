/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: isGithubPages ? '/fincaDemo' : undefined,
  assetPrefix: isGithubPages ? '/fincaDemo/' : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
