import { z } from 'zod';

export const formSchema = z.object({
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
