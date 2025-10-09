import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export', // re-enabled
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
