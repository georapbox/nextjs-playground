'use client';

import { Suspense } from 'react';
import { HydrationBoundary } from '@tanstack/react-query';
import { ErrorResetBoundary } from './ErrorResetBoundary';
import { UsersSkeleton } from './Users/UsersSkeleton';
import { Users } from './Users/Users';
import { TodosSkeleton } from './Todos/TodosSkeleton';
import { Todos } from './Todos/Todos';

export default function ClientPage({ dehydratedState }: { dehydratedState: unknown }) {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex-1">
        <ErrorResetBoundary>
          <HydrationBoundary state={dehydratedState}>
            <Suspense fallback={<UsersSkeleton count={10} />}>
              <Users />
            </Suspense>
          </HydrationBoundary>
        </ErrorResetBoundary>
      </div>

      <div className="flex-1">
        <ErrorResetBoundary>
          <HydrationBoundary state={dehydratedState}>
            <Suspense fallback={<TodosSkeleton count={10} />}>
              <Todos />
            </Suspense>
          </HydrationBoundary>
        </ErrorResetBoundary>
      </div>
    </div>
  );
}
