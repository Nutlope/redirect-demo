const BLOG_URL = "https://starter-blog-example.vercel.app";

module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: "/blog/:slug",
        destination: `${BLOG_URL}/blog/:slug`,
      },
    ];
  },
};
