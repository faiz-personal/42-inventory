import { initTRPC } from '@trpc/server';
import { shopifyRouter } from './shopifyRouter';

const t = initTRPC.create();
export const appRouter = t.router({
  shopify: shopifyRouter,
});
export type AppRouter = typeof appRouter;