'use server';

import { z } from 'zod';
import { sleep } from '@/lib/utils/sleep';
import { formSchema } from './formSchema';

type FormState = {
  errors: Record<string, string[]> | null;
  user: z.output<typeof formSchema> | null;
};

export async function updateUser(_: FormState, formData: FormData): Promise<FormState> {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedUser = formSchema.safeParse(rawFormData);

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
