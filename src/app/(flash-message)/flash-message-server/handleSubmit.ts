import { redirect } from 'next/navigation';
import { serverSetFlashMessage } from '@/lib/flash-message/server/serverFlashMessage';
import type { FlashMessageSchema } from '@/lib/flash-message/config';
import { sleep } from '@/lib/utils/sleep';

export async function handleSubmit(formData: FormData) {
  'use server';

  const data = Object.fromEntries(formData);

  await sleep(500);

  serverSetFlashMessage({
    message: `Form was submitted by ${data.username}.`,
    severity: data.severity as FlashMessageSchema['severity']
  });

  redirect('/flash-message-server/feedback');
}
