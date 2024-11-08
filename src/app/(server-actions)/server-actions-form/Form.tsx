'use client';

import { useFormState } from 'react-dom';
import { FieldError } from '@/app/components/FieldError';
import { updateUser } from './actions';
import { SubmitButton } from './SubmitButton';
import { SubmitMessage } from './SubmitMessage';

export function Form() {
  const [state, formAction] = useFormState(updateUser, {
    errors: null,
    user: null
  });

  return (
    <form action={formAction} className="card max-w-xl">
      <div className="mb-2">
        <label htmlFor="username" className="block mb-1 font-semibold">
          Username
        </label>

        <input type="text" id="username" name="username" className="input-field" />

        <FieldError message={state?.errors?.username?.[0] ?? ''} />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-semibold">
          Email
        </label>

        <input
          type="text" // Deliberately set to "text" to demonstrate backend validation
          id="email"
          name="email"
          className="input-field"
        />

        <FieldError message={state?.errors?.email?.[0] ?? ''} />
      </div>

      {/* Needs to be a separate component for useFormStatus to work: https://react.dev/reference/react-dom/hooks/useFormStatus#useformstatus-will-not-return-status-information-for-a-form-rendered-in-the-same-component */}
      <SubmitButton />

      <SubmitMessage user={state?.user ?? null} />
    </form>
  );
}
