export function isServer() {
  // based on https://github.com/TanStack/query/blob/79e52029975d8a889ffafd7e161010d4997af219/packages/query-core/src/utils.ts#L69
  return typeof window === 'undefined' || 'Deno' in globalThis;
}
