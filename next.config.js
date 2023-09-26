// @ts-check

/*
  https://nextjs.org/docs/api-reference/next.config.js/introduction

  https://nextjs.org/docs/api-reference/next.config.js/environment-variables
*/

const package = require("./package.json");
const VERSION = require("./scripts/compute-version");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const version = String(VERSION);
console.log(`\n\nRunning version: ${version}\n`);

const basePath = ``;

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  reactStrictMode: true,
  basePath,
  env: {
    ASSETS_PREFIX: basePath,
    VERSION: version,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
