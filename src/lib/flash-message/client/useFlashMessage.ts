import { useEffect, useState } from 'react';
import { clientGetFlashMessage, clientSetFlashMessage } from './clientFlashMessage';
import type { FlashMessageSchema } from '../config';

export const useFlashMessage = () => {
  const [flashMessage, setFlashMessage] = useState<FlashMessageSchema | null>(null);

  useEffect(() => {
    const flash = clientGetFlashMessage();

    if (!flash) {
      return;
    }

    setFlashMessage(flash);
  }, []);

  return {
    flashMessage,
    setFlashMessage: clientSetFlashMessage
  };
};
