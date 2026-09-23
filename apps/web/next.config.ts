import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding', '@coinbase/wallet-sdk', '@coinbase/cdp-sdk');
    return config;
  },
};

export default nextConfig;
