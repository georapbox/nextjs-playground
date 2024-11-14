'use server';

import { cookies } from 'next/headers';
import { safeJSON } from '@/lib/utils/safeJSON';
import {
  FLASH_MESSAGE_COOKIE_NAME,
  FLASH_MESSAGE_COOKIE_CONFIG,
  DEFAULT_FLASH_MESSAGE_VARIANT
} from '../config';
import type { FlashMessageSchema } from '../config';

async function serverSetFlashMessage(options: FlashMessageSchema) {
  const { message, severity = DEFAULT_FLASH_MESSAGE_VARIANT } = options;
  const stringifiedValue = safeJSON.stringify({ message, severity });

  if (!stringifiedValue) {
    return;
  }

  cookies().set(FLASH_MESSAGE_COOKIE_NAME, stringifiedValue, FLASH_MESSAGE_COOKIE_CONFIG);
}

async function serverGetFlashMessage() {
  const message = cookies().get(FLASH_MESSAGE_COOKIE_NAME)?.value;

  if (!message) {
    return null;
  }

  serverDeleteFlashMessage();

  return safeJSON.parse<FlashMessageSchema>(message);
}

function serverDeleteFlashMessage() {
  try {
    cookies().delete(FLASH_MESSAGE_COOKIE_NAME);
  } catch (error) {
    throw new Error(
      'Failed to delete flash message cookie. The cookie is set for deletion upon reading, but modification is restricted to a Server Action or Route Handler. Consider reading the cookie value within a Client Component or using the useFlashMessage hook or FlashMessage component.',
      { cause: error }
    );
  }
}

export { serverSetFlashMessage, serverGetFlashMessage };
