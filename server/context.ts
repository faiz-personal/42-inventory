import * as trpc from '@trpc/server';

type ContextType = {}; // Define the context type explicitly

export const createContext = (): ContextType => ({});
export type Context = ContextType;