'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Spinner } from '@/app/components/Spinner';
import { HttpError } from '@/lib/api/http-error';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export const Todos = () => {
  const {
    data: todos,
    error,
    isError,
    isRefetching
  } = useSuspenseQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todos`);

      if (!res.ok) {
        if (res.status === 500) {
          throw new HttpError('500 on todos', res.status);
        }

        if (res.status === 404) {
          throw new HttpError('404 on todos', res.status);
        }

        throw new HttpError('An error occurred', res.status);
      }

      const data = await res.json();
      return data;
    }
  });

  return (
    <>
      <h2 className="text-md font-semibold mb-3">
        Todos
        {isRefetching ? (
          <Spinner className="inline ms-2 text-lg text-blue-500 dark:text-blue-300" />
        ) : null}
      </h2>

      {isError && !isRefetching ? (
        <div className="alert alert-danger mb-4">
          Something went wrong. {error?.message || 'Unknown error'}
        </div>
      ) : null}

      <table className="w-full table">
        <thead>
          <tr>
            <th className="table-cell w-16">Done</th>
            <th className="table-cell">Title</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo: Todo) => (
            <tr key={todo.id} className="odd:bg-neutral-200 dark:odd:bg-neutral-700">
              <td className="table-cell text-center">
                <span className="text-xs">{todo.completed ? '✅' : '❌'}</span>
              </td>
              <td className="table-cell">{todo.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
