/** @type {import('next').NextConfig} */
const nextConfig = {
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
