module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://leerob.io/blog",
      },
      {
        source: "/blog/:slug",
        destination: "https://leerob.io/blog/:slug",
      },
    ];
  },
};
