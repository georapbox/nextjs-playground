import { isServer } from '@/lib/utils/isServer';
import { safeJSON } from '@/lib/utils/safeJSON';
import {
  FLASH_MESSAGE_COOKIE_NAME,
  FLASH_MESSAGE_COOKIE_CONFIG,
  DEFAULT_FLASH_MESSAGE_VARIANT
} from '../config';
import type { FlashMessageSchema } from '../config';

function ensureClientSide(extraMessage?: string) {
  if (isServer()) {
    throw new Error(
      `This function should only be called on the client side.${extraMessage ? ` ${extraMessage}` : ''}`
    );
  }
}

function clientSetFlashMessage(options: FlashMessageSchema) {
  ensureClientSide('To set the flash message cookie, consider using the useFlashMessage hook.');

  const { message, severity = DEFAULT_FLASH_MESSAGE_VARIANT } = options;
  const stringifiedValue = safeJSON.stringify({ message, severity });

  if (!stringifiedValue) {
    return;
  }

  const encodedValue = encodeURIComponent(stringifiedValue);
  const cookieConfig = `Max-Age=${FLASH_MESSAGE_COOKIE_CONFIG.maxAge}; path=${FLASH_MESSAGE_COOKIE_CONFIG.path}`;

  document.cookie = `${FLASH_MESSAGE_COOKIE_NAME}=${encodedValue}; ${cookieConfig}`;
}

function clientGetFlashMessage() {
  ensureClientSide(
    'To read the flash message cookie, consider using the useFlashMessage hook or the FlashMessage component.'
  );

  const match = document.cookie.match(new RegExp(`(^| )${FLASH_MESSAGE_COOKIE_NAME}=([^;]+)`));

  if (!match) {
    return null;
  }

  clientDeleteFlashMessage();

  return safeJSON.parse<FlashMessageSchema>(decodeURIComponent(match[2]));
}

function clientDeleteFlashMessage() {
  ensureClientSide();
  document.cookie = `${FLASH_MESSAGE_COOKIE_NAME}=; Max-Age=0; path=${FLASH_MESSAGE_COOKIE_CONFIG.path}`;
}

export { clientSetFlashMessage, clientGetFlashMessage };
