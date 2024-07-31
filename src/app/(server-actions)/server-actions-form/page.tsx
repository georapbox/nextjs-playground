import type { Metadata } from 'next';
import { UserForm } from './UserForm';

export const metadata: Metadata = {
  title: 'Form - Server Actions'
};

export default function FormPage() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Form - Server Actions</h1>

      <h2 className="text-lg font-semibold">Resources</h2>

      <ul className="mb-4">
        <li>
          <a
            href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#forms"
            target="_blank"
            className="underline"
          >
            Next.js documentation
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?app=desktop&v=EPaLg4U_K1o"
            target="_blank"
            className="underline"
          >
            Exploring React 19 Features - use() Hook, Actions & More
          </a>
        </li>
      </ul>

      <h2 className="text-lg font-semibold mb-1">Demo</h2>
      <UserForm />
    </>
  );
}
