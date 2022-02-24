const BLOG_URL = "https://starter-blog-example.vercel.app";

const rehypePrism = require("@mapbox/rehype-prism");
const withImages = require("next-images");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism],
  },
});
module.exports = withImages({
  ...withBundleAnalyzer({
    images: {
      disableStaticImages: true,
    },
    reactStrictMode: true,
    trailingSlash: true,
    ...withMDX({
      pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    }),
  }),
  async redirects() {
    return [
      {
        source: "/slack",
        destination:
          "https://join.slack.com/t/svixcommunity/shared_invite/zt-qq8tk1jn-NM4uhijSxt6IGa4qwkBeYQ;",
        permanent: false,
      },
      {
        source: "/signup",
        destination: "https://dashboard.svix.com/accounts/signup",
        permanent: false,
      },
      {
        source: "/docs/:path*",
        destination: "https://docs.svix.com/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/blog/",
        destination: `${BLOG_URL}/blog/`,
      },
      {
        source: "/blog/:path*",
        destination: `${BLOG_URL}/blog/:path*`,
      },
    ];
  },
});
