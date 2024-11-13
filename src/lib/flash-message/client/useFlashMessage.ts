import { useEffect, useState } from 'react';
import { getFlashMessageClient, setFlashMessageClient } from '../client/client';
import { FlashMessageOptions } from '../config';

export const useFlashMessage = () => {
  const [flashMessage, setFlashMessage] = useState<FlashMessageOptions | null>(null);

  useEffect(() => {
    const flash = getFlashMessageClient();

    if (!flash) {
      return;
    }

    setFlashMessage(flash);
  }, []);

  return {
    flashMessage,
    setFlashMessage: setFlashMessageClient
  };
};
