module.exports = {
  basePath: "/blog",
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "example.com",
      },
      {
        source: "/blog/:slug",
        destination: "https://blog-svix.vercel.app/blog/:slug",
      },
    ];
  },
};
