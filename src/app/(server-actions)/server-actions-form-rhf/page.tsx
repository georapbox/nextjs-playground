import type { Metadata } from 'next';
import { Form } from './Form';

export const metadata: Metadata = {
  title: 'Form - Server Actions'
};

export default function Page() {
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
            href="https://www.youtube.com/watch?v=VLk45JBe8L8"
            target="_blank"
            className="underline"
          >
            React Hook Form & React 19 Form Actions
          </a>
        </li>
      </ul>

      <h2 className="text-lg font-semibold mb-1">Demo</h2>

      <Form />
    </>
  );
}
