'use server';

import { z } from 'zod';
import { sleep } from '@/lib/utils/sleep';

const schema = z.object({
  username: z
    .string({
      required_error: 'Username is required',
      invalid_type_error: 'Invalid username'
    })
    .min(1, {
      message: 'Username is required'
    }),
  email: z
    .string({
      invalid_type_error: 'Invalid email'
    })
    .min(1, {
      message: 'Email is required'
    })
    .email('Invalid email address')
});

export async function updateUser(prevState: any, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedUser = schema.safeParse(rawFormData);

  if (!validatedUser.success) {
    return {
      errors: validatedUser.error.flatten().fieldErrors,
      user: null
    };
  }

  await sleep(Math.floor(Math.random() * 800) + 200);

  return {
    errors: null,
    user: validatedUser.data
  };
}
