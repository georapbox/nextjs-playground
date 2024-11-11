import { Suspense } from 'react';
import type { Metadata } from 'next';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/api/queryClient';
import { Resources } from '@/app/components/Resources';
import { Users } from './Users';
import { Spinner } from '@/app/components/Spinner';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Error Handling - Data Fetching'
};

const resources = [
  {
    title: 'Routing: Error Handling | Next.js',
    link: 'https://nextjs.org/docs/app/building-your-application/routing/error-handling'
  }
];

export default function Page() {
  const queryClient = getQueryClient();

  /**
   * prefetchQuery - does't throw error
   */
  queryClient.prefetchQuery({
    queryKey: ['users-with-error'],
    async queryFn() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users-with-error`);
      const data = await res.json();
      return data;
    }
  });

  /**
   * fetchQuery - throws error
   */
  // await queryClient.fetchQuery({
  //   queryKey: ['users-with-error'],
  //   async queryFn() {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users-with-error`);

  //     if (!res.ok) {
  //       if (res.status === 500) {
  //         throw new Error('Internal Server Error');
  //       }

  //       if (res.status === 404) {
  //         throw new Error('Not Found');
  //       }
  //     }

  //     const data = await res.json();
  //     return data;
  //   }
  // });

  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Error Handling - Data Fetching</h1>
      <Resources data={resources} />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense
          fallback={
            <p>
              <Spinner className="inline text-blue dark:text-blue-300" /> Loading...
            </p>
          }
        >
          <Users />
        </Suspense>
      </HydrationBoundary>
    </>
  );
}
