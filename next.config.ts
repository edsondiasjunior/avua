import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true, // 301
      },
    ];
  },
};

export default nextConfig;
