import type { Metadata } from 'next';
import { Resources } from '@/app/components/Resources';
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
    title: 'React Hook Form & React 19 Form Actions',
    link: 'https://www.youtube.com/watch?v=VLk45JBe8L8'
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
