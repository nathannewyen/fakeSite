/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.alias["app"] = path.join(__dirname, process.env.APP_DIR);
    config.resolve.alias["components"] = path.join(
      __dirname,
      process.env.COMPONENTS_DIR
    );
    config.resolve.alias["assets"] = path.join(
      __dirname,
      process.env.ASSETS_DIR
    );
    config.resolve.alias["static"] = path.join(
      __dirname,
      process.env.STATIC_DIR
    );
    config.resolve.alias["hooks"] = path.join(__dirname, process.env.HOOKS_DIR);
    return config;
  },
  images: {
    domains: ["i.vimeocdn.com"],
  },
};

module.exports = nextConfig;
