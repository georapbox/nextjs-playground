'use client';

import { useState } from 'react';
// import type { FlashMessageSchema } from '../config';
// import { clientGetFlashMessage } from '../client/clientFlashMessage';
// import { serverGetFlashMessage } from '../server/serverFlashMessage';
import { useFlashMessage } from '../client/useFlashMessage';

export const FlashMessage = () => {
  /**
   * Get flash message from server.
   */
  // const [flashMessage, setFlashMessage] = useState<FlashMessageSchema | null>(null);
  // useEffect(() => {
  //   serverGetFlashMessage().then(flash => {
  //     if (!flash) return;
  //     setFlashMessage(flash);
  //   });
  // }, []);

  /**
   * Get flash message from client
   */
  // const [flashMessage, setFlashMessage] = useState<FlashMessageSchema | null>(null);
  // useEffect(() => {
  //   const flash = clientGetFlashMessage();
  //   if (!flash) return;
  //   setFlashMessage(flash);
  // }, []);

  /**
   * Get flash message from useFlashMessage hook
   */
  const { flashMessage } = useFlashMessage();
  const [showMessage, setShowMessage] = useState(true);

  return flashMessage && showMessage ? (
    <div className={`alert alert-${flashMessage.severity} mb-4`}>
      {flashMessage.message}
      <button type="button" className="p-2" onClick={() => setShowMessage(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </button>
    </div>
  ) : null;
};
