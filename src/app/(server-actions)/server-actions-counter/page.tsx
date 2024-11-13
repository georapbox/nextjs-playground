import type { Metadata } from 'next';
import { Resources } from '@/app/components/Resources';
import { Counter } from './Counter';

const PAGE_TITLE = 'Counter - Server Actions';

export const metadata: Metadata = {
  title: PAGE_TITLE
};

const resources = [
  {
    title: 'Data Fetching: Server Actions and Mutations | Next.js',
    link: 'https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#non-form-elements'
  }
];

export default function Page() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4">{PAGE_TITLE}</h1>
      <Resources data={resources} />
      <Counter initial={0} />
    </>
  );
}
