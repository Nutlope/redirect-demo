module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://www.elmghari.com/blog",
      },
    ];
  },
};
