import type { Metadata } from 'next';
import { JotaiDevTools } from '@/lib/ui-components/JotaiDevTools';
import { Resources } from '@/lib/ui-components/Resources';
import { Counter } from './Counter';

export const metadata: Metadata = {
  title: 'Counter - Jotai'
};

const resources = [
  {
    title: 'Jotai documentation',
    link: 'https://jotai.org/'
  }
];

export default function Page() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Counter - Jotai</h1>
      <Resources data={resources} />
      <Counter />
      <JotaiDevTools />
    </>
  );
}
