module.exports = {
  //   trailingSlash: true,
  // next.js rewrite to redirect /blog to an external blog
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://www.cstrnt.dev",
      },
      {
        source: "/blog/:slug",
        destination: "https://www.cstrnt.dev/blog/:slug",
      },
    ];
  },
};
