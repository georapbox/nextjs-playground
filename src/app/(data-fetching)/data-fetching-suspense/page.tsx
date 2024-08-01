import type { Metadata } from 'next';
import { Suspense } from 'react';
import { UsersSkeleton } from './UsersSkeleton';
import { Users } from './Users';
import { TodosSkeleton } from './TodosSkeleton';
import { Todos } from './Todos';

export const metadata: Metadata = {
  title: 'Suspense - Data Fetching'
};

export default function Page() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Suspense - Data Fetching</h1>

      <h2 className="text-lg font-semibold">Resources</h2>

      <ul className="mb-4">
        <li>
          <a
            href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense"
            target="_blank"
            className="underline"
          >
            Next.js documentation
          </a>
        </li>
      </ul>

      <h2 className="text-lg font-semibold mb-1">Demo</h2>

      <h2 className="text-md font-semibold mb-3">Users</h2>

      <Suspense fallback={<UsersSkeleton count={10} />}>
        <Users />
      </Suspense>

      <h2 className="text-md font-semibold mb-3 mt-3">Todos</h2>

      <Suspense fallback={<TodosSkeleton count={10} />}>
        <Todos />
      </Suspense>
    </>
  );
}
