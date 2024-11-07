import type { Metadata } from 'next';
import { JotaiDevTools } from '@/lib/ui-components/JotaiDevTools';
import { Resources } from '@/lib/ui-components/Resources';
import { Todos } from './Todos';

export const metadata: Metadata = {
  title: 'Todos - Jotai'
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
      <h1 className="text-xl font-semibold mb-4">Todos - Jotai</h1>
      <Resources data={resources} />
      <Todos />
      <JotaiDevTools />
    </>
  );
}
