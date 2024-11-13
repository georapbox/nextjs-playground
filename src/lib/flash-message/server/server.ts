'use server';

import { cookies } from 'next/headers';
import { safeJSON } from '@/lib/utils/safeJSON';
import {
  FLASH_MESSAGE_COOKIE_NAME,
  DEFAULT_FLASH_MESSAGE_VARIANT,
  FlashMessageOptions,
  flashMessageCookieConfig
} from '../config';

export async function setFlashMessageServer(options: FlashMessageOptions) {
  const { message, variant = DEFAULT_FLASH_MESSAGE_VARIANT } = options;
  const stringifiedValue = safeJSON.stringify({ message, variant });

  if (!stringifiedValue) {
    return;
  }

  cookies().set(FLASH_MESSAGE_COOKIE_NAME, stringifiedValue, flashMessageCookieConfig);
}

export async function getFlashMessageServer() {
  const message = cookies().get(FLASH_MESSAGE_COOKIE_NAME)?.value;

  if (!message) {
    return null;
  }

  deleteFlashMessageServer(); // NOTE: Should I wait for this to complete?

  return safeJSON.parse(message);
}

async function deleteFlashMessageServer() {
  try {
    cookies().delete(FLASH_MESSAGE_COOKIE_NAME);
  } catch (error) {
    throw new Error('Failed to delete flash message cookie.', { cause: error });
  }
}
