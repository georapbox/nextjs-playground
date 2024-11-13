import type { Metadata } from 'next';
import { SetFlashMessage } from './SetFlashMessage';

const PAGE_TITLE = 'Flash Messages - Client';

export const metadata: Metadata = {
  title: PAGE_TITLE
};

export default function Page() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-xl font-semibold mb-4">{PAGE_TITLE}</h1>
      <SetFlashMessage />
    </div>
  );
}
