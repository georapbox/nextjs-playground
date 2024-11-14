import type { Metadata } from 'next';
import Link from 'next/link';
import { FlashMessage } from '@/lib/flash-message/ui-components/FlashMessage';
// import { serverGetFlashMessage } from '@/lib/flash-message/server/serverFlashMessage';

const PAGE_TITLE = 'Flash Messages - Server - Feedback';

export const metadata: Metadata = {
  title: PAGE_TITLE
};

export default function Page() {
  /* Uncomment this block throws an error trying to delete the cookie after reading it. */
  // await serverGetFlashMessage();

  return (
    <div className="max-w-2xl">
      <h1 className="text-xl font-semibold mb-4">{PAGE_TITLE}</h1>

      <p className="mb-4">
        This page shows a flash message that was set in a previous page. If you{' '}
        <a href="/flash-message-client/feedback" className="link">
          refresh the page
        </a>
        , the flash message will disappear.
      </p>

      <p className="mb-4">
        <Link href="/flash-message-server" className="link">
          « Back
        </Link>
      </p>

      <FlashMessage />
    </div>
  );
}
