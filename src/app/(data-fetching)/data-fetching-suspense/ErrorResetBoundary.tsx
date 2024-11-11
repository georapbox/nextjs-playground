import { PropsWithChildren } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

export const ErrorResetBoundary = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <div>
              <p>Something went wrong: {error.message || 'Unknown error'}</p>
              <button className="link" onClick={() => resetErrorBoundary()}>
                Try again
              </button>
            </div>
          )}
          onReset={reset}
        >
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};
