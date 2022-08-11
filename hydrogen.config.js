import {
  defineConfig,
  CookieSessionStorage,
  PerformanceMetricsServerAnalyticsConnector,
} from '@shopify/hydrogen/config';

export default defineConfig({

  shopify: () => ({
    defaultLanguageCode: 'EN',
    defaultCountryCode: 'US',
    storeDomain: 'editions-demo.myshopify.com',
    storefrontToken: 'f18c5a628794c4d3eb0340327abdb19e',
    storefrontApiVersion: '2022-07',
  }),
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
  serverAnalyticsConnectors: [PerformanceMetricsServerAnalyticsConnector],
});
