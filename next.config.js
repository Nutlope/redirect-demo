module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog/:path",
        destination: "https://www.elmghari.com/:path",
      },
    ];
  },
};
