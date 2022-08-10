import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: 'hydrogen-preview.myshopify.com',
    storefrontToken: '3b580e70970c4528da70c98e097c2fa0',
    // storeDomain: 'editions-demo.myshopify.com',
    // storefrontToken: 'f18c5a628794c4d3eb0340327abdb19e',
    storefrontApiVersion: '2022-07',
  },
});
