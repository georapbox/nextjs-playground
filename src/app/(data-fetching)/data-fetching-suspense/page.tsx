import type { Metadata } from 'next';
import { dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/api/queryClient';
import { Resources } from '@/app/components/Resources';
import ClientPage from './ClientPage';

export const dynamic = 'force-dynamic';

const PAGE_TITLE = 'Suspense - Data Fetching';

export const metadata: Metadata = {
  title: PAGE_TITLE
};

const resources = [
  {
    title: 'Routing: Loading UI and Streaming | Next.js',
    link: 'https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense'
  }
];

export default function Page() {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery({
    queryKey: ['users'],
    async queryFn() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`);
      const data = await res.json();
      return data;
    }
  });

  queryClient.prefetchQuery({
    queryKey: ['todos'],
    async queryFn() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todos`);
      const data = await res.json();
      return data;
    }
  });

  return (
    <>
      <h1 className="text-xl font-semibold mb-4">{PAGE_TITLE}</h1>
      <Resources data={resources} />
      <ClientPage dehydratedState={dehydrate(queryClient)} />
    </>
  );
}
