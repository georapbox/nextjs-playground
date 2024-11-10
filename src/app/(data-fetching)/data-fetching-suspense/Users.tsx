'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

type User = {
  id: string;
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
        throw new Error('Could not fetch users.');
      }

      const data = await res.json();
      return data;
    }
  });

  return (
    <>
      {error ? <div className="alert alert-danger mb-4">Something went wrong.</div> : null}

      {isRefetching ? <p className="mb-4">Refetching in the background...</p> : null}

      <ul>
        {users.map((user: User) => (
          <li key={user.id} className="mb-3 last:mb-0 card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
