import { sleep } from '@/lib/utils/sleep';

type User = {
  id: string;
  name: string;
  email: string;
};

export async function Users() {
  await sleep(2000);
  const usersReq = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`);
  const users = await usersReq.json();

  if (!users || !Array.isArray(users)) {
    return (
      <div className="card mb-3 last:mb-0">
        <h3 className="text-red-700 dark:text-red-300">Error fetching users</h3>
      </div>
    );
  }

  return (
    <ul>
      {users.map((user: User) => (
        <li key={user.id} className="mb-3 last:mb-0 card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
}
