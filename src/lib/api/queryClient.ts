import {
  QueryCache,
  QueryClient,
  defaultShouldDehydrateQuery,
  isServer
} from '@tanstack/react-query';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: true,
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 10 * 1000
      },
      dehydrate: {
        // include pending queries in dehydration
        shouldDehydrateQuery: query => {
          return defaultShouldDehydrateQuery(query) || query.state.status === 'pending';
        }
      }
    },

    queryCache: new QueryCache({
      onError: error => {
        console.log('QueryCache onError', error);
        if (error && (error as any).status === 500) {
          console.log('500 error occurred', error);
        }

        if (error && (error as any).status === 404) {
          console.log('404 error occurred', error);
        }
      }
    })
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient();
    }

    return browserQueryClient;
  }
}
