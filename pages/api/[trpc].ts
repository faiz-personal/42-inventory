// pages/api/trpc/[trpc].ts
import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from 'server/routers';
import { createContext } from '/Users/faizanasif/Documents/42-inventory/server/context';
import type { NextApiRequest, NextApiResponse } from 'next';


export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createContext,
  onError({ error }: { error: unknown }) {
    console.error('Error:', error);
    },
});
