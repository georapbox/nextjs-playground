'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export const Todos = () => {
  const {
    data: todos,
    error,
    isRefetching
  } = useSuspenseQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todos`);

      if (!res.ok) {
        throw new Error('Could not fetch todos.');
      }

      const data = await res.json();
      return data;
    }
  });

  return (
    <>
      {error ? <div className="alert alert-danger mb-4">Something went wrong.</div> : null}

      {isRefetching ? <p className="mb-4">Refetching in the background...</p> : null}

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
