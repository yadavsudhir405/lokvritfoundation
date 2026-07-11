import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into the `out/` directory
  output: "export",

  // Required for S3/CloudFront: /page -> /page/index.html
  trailingSlash: true,

  // next/image's default optimiser requires a server; disable it for static builds
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
