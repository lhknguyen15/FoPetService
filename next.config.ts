import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack's filesystem scan inside this project, not its parent folder.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
