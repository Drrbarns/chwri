import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow loading Next.js dev resources when accessing the app via 127.0.0.1
  allowedDevOrigins: ["127.0.0.1", "localhost", "192.168.0.169"],
  images: {
    // Serve images directly from public/ on Vercel; avoids optimizer 404s in production
    unoptimized: true,
  },
};

export default nextConfig;
