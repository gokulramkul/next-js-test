/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.mjs

export default {
  webpack: (config, { isServer }) => {
    // Add support for loading HTML files
    config.module.rules.push({
      test: /\.html$/,
      use: "html-loader",
    });

    return config;
  },
};

// export default nextConfig;
