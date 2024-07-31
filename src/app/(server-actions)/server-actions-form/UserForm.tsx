'use client';

import { useFormStatus, useFormState } from 'react-dom';
import { FieldError } from '@/lib/ui-components/FieldError';
import { updateUser } from './actions';
import { SubmitButton } from './SubmitButton';
import { SubmitMessage } from './SubmitMessage';

export function UserForm() {
  const [state, formAction] = useFormState(updateUser, null);

  return (
    <form
      action={formAction}
      className="p-4 max-w-[25rem] rounded-lg border border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-900"
    >
      <div className="mb-2">
        <label htmlFor="username" className="block mb-1 font-semibold">
          Username
        </label>

        <input
          type="text"
          id="username"
          name="username"
          className="w-full p-1 border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 rounded"
        />

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
          className="w-full p-1 border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 rounded"
        />

        <FieldError message={state?.errors?.email?.[0] ?? ''} />
      </div>
      {/* Needs to be a separate component for useFormStatus to work: https://react.dev/reference/react-dom/hooks/useFormStatus#useformstatus-will-not-return-status-information-for-a-form-rendered-in-the-same-component */}
      <SubmitButton />

      <SubmitMessage user={state?.user ?? null} />
    </form>
  );
}
