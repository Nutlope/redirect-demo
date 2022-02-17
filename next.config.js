module.exports = {
  async rewrites() {
    return [
      //   {
      //     source: "/blog",
      //     destination: "https://www.cstrnt.dev",
      //   },
      {
        source: "/blog/:slug",
        destination: "https://www.cstrnt.dev/blog/:slug*",
      },
    ];
  },
};
