import { z } from 'zod';

const numberRegex = /[0-9]/;
const uppercaseRegex = /[A-Z]/;
const lowercaseRegex = /[a-z]/;
const symbolRegex = /[!#$%^&*]/;
const lengthRegex = /^.{8,20}$/;

export const formSchema = z
  .object({
    firstName: z.string().trim().min(1, {
      message: 'First name is required.'
    }),
    lastName: z.string().trim().min(1, {
      message: 'Last name is required.'
    }),
    email: z.string().trim().email({
      message: 'Invalid email address.'
    }),
    gender: z.string(),
    terms: z
      .boolean()
      .optional()
      .refine(value => value, {
        message: 'You must agree to the terms and conditions.'
      }),
    password: z.string()
  })
  .superRefine((data, ctx) => {
    if (!lengthRegex.test(data.password)) {
      ctx.addIssue({
        message: 'Password length should be 8-20 characters.',
        code: z.ZodIssueCode.custom,
        path: ['password']
      });
    }

    if (!numberRegex.test(data.password)) {
      ctx.addIssue({
        message: 'Password must contain at least one number.',
        code: z.ZodIssueCode.custom,
        path: ['password']
      });
    }

    if (!uppercaseRegex.test(data.password)) {
      ctx.addIssue({
        message: 'Password must contain at least one uppercase letter.',
        code: z.ZodIssueCode.custom,
        path: ['password']
      });
    }

    if (!lowercaseRegex.test(data.password)) {
      ctx.addIssue({
        message: 'Password must contain at least one lowercase letter.',
        code: z.ZodIssueCode.custom,
        path: ['password']
      });
    }

    if (!symbolRegex.test(data.password)) {
      ctx.addIssue({
        message: 'Password must contain at least one special character (!#$%^&*).',
        code: z.ZodIssueCode.custom,
        path: ['password']
      });
    }

    if (data.password === data.email) {
      ctx.addIssue({
        message: 'Password must not be the same as the email address.',
        code: z.ZodIssueCode.custom,
        path: ['password']
      });
    }
  });
