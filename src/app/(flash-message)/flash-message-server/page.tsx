import Link from 'next/link';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { setFlashMessageServer } from '@/lib/flash-message/server/server';

const PAGE_TITLE = 'Flash Messages - Server';

export const metadata: Metadata = {
  title: PAGE_TITLE
};

export default function Page() {
  async function handleSubmit() {
    'use server';

    setFlashMessageServer({ message: 'This is a flash message set inside a server action.' });
    redirect('/flash-message-server/show-flash-message');
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-xl font-semibold mb-4">{PAGE_TITLE}</h1>

      <form action={handleSubmit} className="card mb-4">
        <p>Set server flash message and navigate to show-flash-message page.</p>

        <button type="submit" className="link block">
          Set flash message
        </button>
      </form>

      <div className="card">
        <p>Navigate to show-flash-message page without setting a flash message.</p>

        <Link href="/flash-message-server/show-flash-message" className="link">
          Go to show-flash-message page
        </Link>
      </div>
    </div>
  );
}
