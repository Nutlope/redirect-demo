module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog/:path",
        destination: "https://blog-kk1clywsj-svix.vercel.app/blog/:path",
      },
    ];
  },
};
