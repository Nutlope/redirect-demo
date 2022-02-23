module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://starter-blog-example.vercel.app/blog",
      },
      {
        source: "/blog/:slug",
        destination: "https://starter-blog-example.vercel.app/blog/:slug",
      },
    ];
  },
};
