import type { Metadata } from 'next';
import { Resources } from '@/lib/ui-components/Resources';
import { Form } from './Form';

export const metadata: Metadata = {
  title: 'Form - Server Actions'
};

const resources = [
  {
    title: 'Next.js documentation',
    link: 'https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#forms'
  },
  {
    title: 'Exploring React 19 Features - use() Hook, Actions & More',
    link: 'https://www.youtube.com/watch?app=desktop&v=EPaLg4U_K1o'
  }
];

export default function Page() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Form - Server Actions</h1>
      <Resources data={resources} />
      <Form />
    </>
  );
}
