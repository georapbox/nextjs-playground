import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Resources } from '@/app/components/Resources';
import { UsersSkeleton } from './UsersSkeleton';
import { Users } from './Users';
import { TodosSkeleton } from './TodosSkeleton';
import { Todos } from './Todos';

export const metadata: Metadata = {
  title: 'Suspense - Data Fetching'
};

const resources = [
  {
    title: 'Next.js documentation',
    link: 'https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense'
  }
];

export default function Page() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Suspense - Data Fetching</h1>

      <Resources data={resources} />

      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <h2 className="text-md font-semibold mb-3">Users</h2>

          <Suspense fallback={<UsersSkeleton count={10} />}>
            <Users />
          </Suspense>
        </div>

        <div className="flex-1">
          <h2 className="text-md font-semibold mb-3">Todos</h2>

          <Suspense fallback={<TodosSkeleton count={100} />}>
            <Todos />
          </Suspense>
        </div>
      </div>
    </>
  );
}
