'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { setFlashMessageClient } from '@/lib/flash-message/client/client';

export const SetFlashMessage = () => {
  const router = useRouter();

  const handleClick = () => {
    setFlashMessageClient({ message: 'This is a flash message set on the client side.' });
    router.push('/flash-message-client/show-flash-message');
  };

  return (
    <>
      <div className="card mb-4">
        <p>Set client flash message and navigate to show-flash-message page.</p>

        <button type="button" className="link" onClick={handleClick}>
          Set flash message
        </button>
      </div>

      <div className="card">
        <p>Navigate to show-flash-message page without setting a flash message.</p>

        <Link href="/flash-message-client/show-flash-message" className="link">
          Go to show-flash-message page
        </Link>
      </div>
    </>
  );
};
