module.exports = {
  // next.js rewrite to redirect /blog to an external blog
  async rewrites() {
    return [
      {
        source: "/blog/",
        destination: "https://blog-svix.vercel.app/blog",
      },
      {
        source: "/blog/:path",
        destination: "https://blog-svix.vercel.app/blog/:path",
      },
    ];
  },
};
