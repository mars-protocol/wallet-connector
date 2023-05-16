/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve = {
      extensions: [".tsx", ".js"],
      alias: {
        ...config.resolve.alias,
        react: path.resolve(__dirname, "../node_modules/react"),
        "react-dom": path.resolve(__dirname, "../node_modules/react-dom"),
        "@marsprotocol/wallet-connector": path.resolve(__dirname, "../dist"),
      },
    }
    return config
  },
}

module.exports = nextConfig
