'use client';

import { Suspense } from 'react';
import { HydrationBoundary, QueryErrorResetBoundary } from '@tanstack/react-query';
import { UsersSkeleton } from './UsersSkeleton';
import { Users } from './Users';
import { TodosSkeleton } from './TodosSkeleton';
import { Todos } from './Todos';
import { ErrorBoundary } from 'react-error-boundary';

export default function ClientPage({ dehydratedState }: { dehydratedState: unknown }) {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex-1">
        <h2 className="text-md font-semibold mb-3">Users</h2>

        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              fallbackRender={({ error, resetErrorBoundary }) => (
                <div>
                  <p>Something went wrong: {error.message}</p>
                  <button className="link" onClick={() => resetErrorBoundary()}>
                    Try again
                  </button>
                </div>
              )}
              onReset={reset}
            >
              <HydrationBoundary state={dehydratedState}>
                <Suspense fallback={<UsersSkeleton count={10} />}>
                  <Users />
                </Suspense>
              </HydrationBoundary>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </div>

      <div className="flex-1">
        <h2 className="text-md font-semibold mb-3">Todos</h2>

        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              fallbackRender={({ error, resetErrorBoundary }) => (
                <div>
                  <p>Something went wrong: {error.message}</p>
                  <button className="link" onClick={() => resetErrorBoundary()}>
                    Try again
                  </button>
                </div>
              )}
              onReset={reset}
            >
              <HydrationBoundary state={dehydratedState}>
                <Suspense fallback={<TodosSkeleton count={10} />}>
                  <Todos />
                </Suspense>
              </HydrationBoundary>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </div>
    </div>
  );
}
