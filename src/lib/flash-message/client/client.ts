import { isServer } from '@/lib/utils/isServer';
import { safeJSON } from '@/lib/utils/safeJSON';
import {
  FLASH_MESSAGE_COOKIE_NAME,
  DEFAULT_FLASH_MESSAGE_VARIANT,
  FlashMessageOptions,
  flashMessageCookieConfig
} from '../config';

function ensureClientSide() {
  if (isServer()) {
    throw new Error('This function should only be called on the client side.');
  }
}

export function setFlashMessageClient(options: FlashMessageOptions) {
  ensureClientSide();

  const { message, variant = DEFAULT_FLASH_MESSAGE_VARIANT } = options;
  const stringifiedValue = safeJSON.stringify({ message, variant });

  if (!stringifiedValue) {
    return;
  }

  const encodedValue = encodeURIComponent(stringifiedValue);
  const cookieConfig = `Max-Age=${flashMessageCookieConfig.maxAge}; path=${flashMessageCookieConfig.path}`;

  document.cookie = `${FLASH_MESSAGE_COOKIE_NAME}=${encodedValue}; ${cookieConfig}`;
}

export function getFlashMessageClient() {
  ensureClientSide();

  const match = document.cookie.match(new RegExp(`(^| )${FLASH_MESSAGE_COOKIE_NAME}=([^;]+)`));

  if (!match) {
    return null;
  }

  deleteFlashMessageClient();

  return safeJSON.parse<FlashMessageOptions>(decodeURIComponent(match[2]));
}

function deleteFlashMessageClient() {
  ensureClientSide();
  document.cookie = `${FLASH_MESSAGE_COOKIE_NAME}=; Max-Age=0; path=${flashMessageCookieConfig.path}`;
}
