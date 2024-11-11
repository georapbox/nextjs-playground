'use client';

import { useRouter } from 'next/navigation';
import { getQueryClient } from '@/lib/api/queryClient';
import { useEffect } from 'react';
// import { HttpError } from '@/lib/api/http-error';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const queryClient = getQueryClient();

  /**
   * NOTE:
   * Re-throw the error to bubble up to the global error boundary.
   * Use it with prefetchQuery.
   */
  // if (error instanceof HttpError && error.statusCode === 404) {
  //   throw error;
  // }

  useEffect(() => {
    queryClient.resetQueries({
      queryKey: ['users-with-error']
    });
  }, [queryClient]);

  return (
    <main>
      <p>Something went wrong: {error.message || 'Unknown error'}</p>

      <button type="button" className="link" onClick={() => router.push('/')}>
        Go to Home
      </button>

      {' | '}

      <button
        type="button"
        className="link"
        onClick={() => {
          queryClient.resetQueries({
            queryKey: ['users-with-error']
          });

          reset();
        }}
      >
        Try again
      </button>
    </main>
  );
}
