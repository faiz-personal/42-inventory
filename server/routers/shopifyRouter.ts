import * as trpc from '@trpc/server';
import Shopify, { ApiVersion, RestClient } from '@shopify/shopify-api';

// Initialize the Shopify context
Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SHOPIFY_SCOPES ? process.env.SHOPIFY_SCOPES.split(',') : [],
  HOST_NAME: `${process.env.SHOPIFY_STORE_NAME}.myshopify.com`,
  IS_EMBEDDED_APP: false,
  API_VERSION: ApiVersion.April23, // Ensure the API version matches what's available and necessary
});

// Create a function to get a Shopify REST client
function getShopifyClient() {
    return new RestClient(process.env.SHOPIFY_STORE_NAME, process.env.SHOPIFY_ACCESS_TOKEN);
  }
  

const t = trpc.initTRPC.create();

export const shopifyRouter = t.router({
    getInventory: t.procedure.query(async () => {
      const client = getShopifyClient();
      const response = await client.get({
        path: 'products',
      });
      return response.body.products;
    }),
  });

