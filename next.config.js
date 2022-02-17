module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://blog-svix.vercel.app/blog/",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "https://blog-svix.vercel.app/blog/:slug",
        permanent: true,
      },
    ];
  },
};
