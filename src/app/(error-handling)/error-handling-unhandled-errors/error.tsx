'use client';

import { getQueryClient } from '@/lib/api/queryClient';

export default function Error({
  error,
  reset
}: {
  error: Error & { status?: number; digest?: string };
  reset: () => void;
}) {
  const queryClient = getQueryClient();

  // NOTE: Re-throw the error to bubble up to the global error boundary.
  //       Use it with prefetchQuery.
  if (error && error.status === 404) {
    throw error;
  }

  return (
    <main>
      <h1>Something went wrong:</h1>

      {error.message ? <h2>{error.message}</h2> : null}

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          queryClient.resetQueries({
            queryKey: ['users']
          });
          reset();
        }}
      >
        Try again
      </button>
    </main>
  );
}
