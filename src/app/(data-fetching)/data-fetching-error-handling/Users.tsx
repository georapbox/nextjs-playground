'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Spinner } from '@/app/components/Spinner';
import { HttpError } from '@/lib/api/http-error';

type User = {
  id: number;
  name: string;
  email: string;
};

export const Users = () => {
  const {
    data: users,
    error,
    isError,
    isRefetching
  } = useSuspenseQuery({
    queryKey: ['users-with-error'],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users-with-error`);

      if (!res.ok) {
        if (res.status === 500) {
          throw new HttpError('Internal Server Error', 500);
        }

        if (res.status === 404) {
          throw new HttpError('Not Found', 404);
        }
      }

      const data = await res.json();
      return data;
    }
  });

  return (
    <div className="max-w-lg">
      <h2 className="text-md font-semibold mb-3">
        Users
        {isRefetching ? (
          <Spinner className="inline ms-2 text-lg text-blue-500 dark:text-blue-300" />
        ) : null}
      </h2>

      {isError && !isRefetching ? (
        <div className="alert alert-danger mb-4">
          Something went wrong. {error?.message || 'Unknown error'}
        </div>
      ) : null}

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
