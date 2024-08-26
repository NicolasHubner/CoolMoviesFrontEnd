/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: `${process.env.NEXT_PRIVATE_API_BASE_URL}/graphql`,
      },
    ];
  },
  reactStrictMode: true,
};
