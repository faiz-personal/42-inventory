// utils/trpc.ts
import { createTRPCClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '../server/routers'; // Adjust the path as necessary

const trpc = createTRPCClient<AppRouter>({
    links: [
      httpBatchLink({
        url: process.env.NEXT_PUBLIC_TRPC_URL || '/api/trpc',
      }),
    ],
  });

export default trpc;
