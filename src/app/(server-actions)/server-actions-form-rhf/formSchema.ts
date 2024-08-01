import { z } from 'zod';

export const formSchema = z.object({
  firstName: z.string().trim().min(1, {
    message: 'First name is required.'
  }),
  lastName: z.string().trim().min(1, {
    message: 'Last name is required.'
  }),
  email: z.string().trim().email({
    message: 'Invalid email address.'
  }),
  terms: z
    .boolean()
    .optional()
    .refine(value => value === true, {
      message: 'You must agree to the terms and conditions.'
    })
});