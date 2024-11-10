import { Suspense } from 'react';
import type { Metadata } from 'next';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/api/queryClient';
import { Resources } from '@/app/components/Resources';
import { Users } from './Users';

export const metadata: Metadata = {
  title: 'Error handling - Unhandled errors'
};

const resources = [
  {
    title: 'Next.js documentation',
    link: 'https://nextjs.org/docs/app/building-your-application/routing/error-handling'
  }
];

export default async function Page() {
  const queryClient = getQueryClient();

  // Prefetch - does't throw error

  queryClient.prefetchQuery({
    queryKey: ['users'],
    async queryFn() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`);
      const data = await res.json();
      return data;
    }
  });

  // Fetch - throws error

  // await queryClient.fetchQuery({
  //   queryKey: ['users'],
  //   async queryFn() {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`);

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
      <h1 className="text-xl font-semibold mb-4">Error handling - Unhandled errors</h1>
      <Resources data={resources} />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<p>Loading...</p>}>
          <Users />
        </Suspense>
      </HydrationBoundary>
    </>
  );
}
