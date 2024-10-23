import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://cb00208b039845235a497673a4e62efe@o4508171299913728.ingest.us.sentry.io/4508171306008576",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
