/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  allowedDevOrigins: [
    '127.0.0.1',
    'localhost',
  ],

  webpack(config) {
    config.watchOptions = {
      poll: 500,
      aggregateTimeout: 100,
    };

    return config;
  },
};

export default nextConfig;