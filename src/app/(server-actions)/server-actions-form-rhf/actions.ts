'use server';

import { sleep } from '@/lib/utils/sleep';
import { formSchema } from './formSchema';
import { z } from 'zod';

type FormState = {
  message: { type: 'success' | 'error'; text: string };
  fields?: Record<string, string>;
  issues?: { name: string; message: string }[];
};

export async function onSubmitAction(_: FormState, data: FormData): Promise<FormState> {
  // const formData = Object.fromEntries(data);

  const formDataEntries = Array.from(data.entries());
  const formData = formDataEntries.reduce(
    (acc, [key, value]) => {
      acc[key] = key === 'terms' ? value === 'on' : value; // Convert 'terms' to boolean
      return acc;
    },
    {} as Record<string, any>
  );

  const parsed = formSchema.safeParse(formData);

  if (!parsed.success) {
    console.log('Submission failed', parsed.error);

    const fields: Record<string, string> = {};

    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }

    return {
      message: {
        type: 'error',
        text: 'Please correct the following issues:'
      },
      fields,
      issues: parsed.error.issues.map(issue => ({
        name: issue.path.join('.'),
        message: issue.message
      }))
    };
  }

  if (parsed.data.email !== parsed.data.email.toLowerCase()) {
    return {
      message: {
        type: 'error',
        text: 'Email address must be lowercase'
      },
      fields: Object.fromEntries(
        Object.entries(parsed.data).map(([key, value]) => [key, String(value)])
      )
    };
  }

  await sleep(Math.floor(Math.random() * 800) + 200);

  console.log('Submission successful', parsed.data);

  return {
    message: {
      type: 'success',
      text: 'Submission successful'
    },
    fields: Object.fromEntries(
      Object.entries(parsed.data).map(([key, value]) => [key, String(value)])
    )
  };
}
