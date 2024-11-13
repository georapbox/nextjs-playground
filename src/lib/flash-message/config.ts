export type FlashMessageOptions = {
  message: string;
  variant?: 'success' | 'danger' | 'info';
};

export const FLASH_MESSAGE_COOKIE_NAME = 'flashMessage' as const;
export const DEFAULT_FLASH_MESSAGE_VARIANT = 'info' as const;

export const flashMessageCookieConfig = {
  path: '/',
  // QUESTION
  // Do we need it at all, if yes what should be the value?
  // Are there cases when we need to keep the flash message for more than the specified time if the user doesn't navigate to the page with the flash message?
  maxAge: 10
} as const;
