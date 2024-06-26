/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "wallpapercave.com",
      },
      {
        hostname: "images.rawpixel.com",
      },
    ],
  },
}

export default nextConfig
