import type { Metadata } from 'next';
import Link from 'next/link';
import { FlashMessage } from '@/lib/flash-message/ui-components/FlashMessage';

const PAGE_TITLE = 'Flash Messages - Client - Show Flash Message';

export const metadata: Metadata = {
  title: PAGE_TITLE
};

export default function Page() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-xl font-semibold mb-4">{PAGE_TITLE}</h1>

      <FlashMessage />

      <p className="mb-4">
        This page shows a flash message that was set in a previous page. If you refresh the page,
        the flash message will disappear.
      </p>

      <p>
        <Link href="/flash-message-client" className="link">
          « Back
        </Link>
      </p>
    </div>
  );
}
