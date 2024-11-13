import type { Metadata } from 'next';
import Link from 'next/link';
import { FlashMessage } from '@/lib/flash-message/ui-components/FlashMessage';
// import { getFlashMessageServer } from '@/lib/flash-message/server/server';

const PAGE_TITLE = 'Flash Messages - Server - Show Flash Message';

export const metadata: Metadata = {
  title: PAGE_TITLE
};

export default function Page() {
  // const fm = await getFlashMessageServer();
  // console.log('Flash message:', fm);

  return (
    <div className="max-w-2xl">
      <h1 className="text-xl font-semibold mb-4">{PAGE_TITLE}</h1>

      <FlashMessage />

      {/* <div className="card mb-4">
        <p>{fm?.message}</p>
      </div> */}

      <p className="mb-4">
        This page shows a flash message that was set in a previous page. If you refresh the page,
        the flash message will disappear.
      </p>

      <p>
        <Link href="/flash-message-server" className="link">
          « Back
        </Link>
      </p>
    </div>
  );
}
