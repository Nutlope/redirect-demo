const BLOG_URL = "";

module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://blog-svix.vercel.app/blog",
      },
      {
        source: "/blog/:slug",
        destination: "https://blog-svix.vercel.app/blog/:slug",
      },
    ];
  },
};
