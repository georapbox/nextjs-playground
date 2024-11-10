'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

type User = {
  id: number;
  name: string;
  email: string;
};

export const Users = () => {
  const {
    data: users,
    error,
    isRefetching
  } = useSuspenseQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`);

      if (!res.ok) {
        if (res.status === 500) {
          throw new Response('', {
            status: 500,
            statusText: 'Internal Server Error'
          });
        }

        if (res.status === 404) {
          throw new Response('', {
            status: 404,
            statusText: 'Not Found'
          });
        }
      }

      try {
        const data = await res.json();
        return data;
      } catch {
        return [];
      }
    }
  });

  return (
    <div className="max-w-lg">
      {error ? <div className="alert alert-danger mb-4">Something went wrong.</div> : null}

      {isRefetching ? <p className="mb-4">Refetching in the background...</p> : null}

      <ul>
        {(users && users.length > 0 ? users : []).map((user: User) => (
          <li key={user.id} className="mb-3 last:mb-0 card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
