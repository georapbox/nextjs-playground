import type { Metadata } from 'next';
import { Resources } from '@/app/components/Resources';
import { Todos } from './Todos';

const PAGE_TITLE = 'Todos - Jotai';

export const metadata: Metadata = {
  title: PAGE_TITLE
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
      <h1 className="text-xl font-semibold mb-4">{PAGE_TITLE}</h1>
      <Resources data={resources} />
      <Todos />
    </>
  );
}
