import type { Metadata } from 'next';
import { JotaiDevTools } from '@/lib/ui-components/JotaiDevTools';
import { Counter } from './Counter';

export const metadata: Metadata = {
  title: 'Counter - Jotai'
};

export default function Page() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Counter - Jotai</h1>

      <h2 className="text-lg font-semibold">Resources</h2>

      <ul className="mb-4">
        <li>
          <a href="https://jotai.org/" target="_blank" className="underline">
            Jotai documentation
          </a>
        </li>
      </ul>

      <h2 className="text-lg font-semibold mb-1">Demo</h2>

      <Counter />

      <JotaiDevTools />
    </>
  );
}
