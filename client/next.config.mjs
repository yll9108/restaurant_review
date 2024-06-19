/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.daisyui.com",
        pathname: "/images/stock/**",
      },
    ],
  },
};

export default nextConfig;
