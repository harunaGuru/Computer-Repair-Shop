// import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  experimental:{
    insrumentationHook: true
  }
  // Your existing Next.js configuration
};

// Make sure adding Sentry options is the last code to run before exporting
export default withSentryConfig(nextConfig, {
  org: "hdo-coy",
  project: "javascript-nextjs",

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false, // Can be used to suppress logs
  hideSourceMaps: true,
  disableLogger: true,
});


// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
