'use client';

import { useState, useEffect } from 'react';
import { FlashMessageOptions } from '../config';
import { getFlashMessageClient } from '../client/client';
// import { getFlashMessageServer } from '../server/server';
// import { useFlashMessage } from '../client/useFlashMessage';

export const FlashMessage = () => {
  const [flashMessage, setFlashMessage] = useState<FlashMessageOptions | null>(null);

  // useEffect(() => {
  //   getFlashMessageServer().then(flash => {
  //     if (!flash) {
  //       return;
  //     }

  //     setFlashMessage(flash);
  //   });
  // }, []);

  useEffect(() => {
    const flash = getFlashMessageClient();

    if (!flash) {
      return;
    }

    setFlashMessage(flash);
  }, []);

  // const { flashMessage } = useFlashMessage();
  // const [showMessage, setShowMessage] = useState(true);

  return flashMessage ? (
    <div className={`alert alert-${flashMessage.variant} mb-4`}>
      {flashMessage.message}
      <button type="button" className="p-2" onClick={() => setFlashMessage(null)}>
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
