import type { Metadata } from 'next';
import Link from 'next/link';
import { Counter } from './Counter';

export const metadata: Metadata = {
  title: 'Counter - Server Actions'
};

export default function CounterPage() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Counter - Server Actions</h1>

      <h2 className="text-lg font-semibold">Resources</h2>

      <ul className="mb-4">
        <li>
          <a
            href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#non-form-elements"
            target="_blank"
            className="underline"
          >
            Next.js documentation
          </a>
        </li>
      </ul>

      <h2 className="text-lg font-semibold mb-1">Demo</h2>

      <Counter initial={0} />
    </>
  );
}
