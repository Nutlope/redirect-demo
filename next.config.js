const BLOG_URL = "https://starter-blog-example.vercel.app";

module.exports = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/blog/",
        destination: `${BLOG_URL}/blog/`,
      },
      {
        source: "/blog/:path*",
        destination: `${BLOG_URL}/blog/:path*`, // This should copy the slash from :path*
      },
    ];
  },
};
