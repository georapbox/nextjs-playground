'use client';

import { useRef, useTransition, useState, useEffect } from 'react';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './formSchema';
import { onSubmitAction } from './actions';
import { FieldError } from '@/lib/ui-components/FieldError';

export function Form() {
  const [jsEnabled, setJsEnabled] = useState(false);
  const [formDisabledUntilValid, setFormDisabledUntilValid] = useState(false);

  useEffect(() => {
    setJsEnabled(true);
  }, []);

  const [isPending, startTransition] = useTransition();

  const [state, formAction] = useFormState(onSubmitAction, {
    message: { type: 'success', text: '' }
  });

  const form = useForm<z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      ...(state?.fields ?? {})
    }
  });

  const formRef = useRef<HTMLFormElement>(null);

  const getErrorMessage = (name: keyof z.output<typeof formSchema>) => {
    return (
      form.formState.errors?.[name]?.message ||
      // state?.issues?.find(issue => issue.name === name)?.message ||
      ''
    );
  };

  const messageColor = state?.message.type === 'success' ? 'green' : 'red';

  return (
    <>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={evt => {
          form.handleSubmit(() => {
            startTransition(() => {
              evt.preventDefault();
              formAction(new FormData(formRef.current!));
            });
          })(evt);
        }}
        className="p-4 rounded-lg border border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-900"
      >
        <div className="grid grid-flow-row sm:grid-flow-col gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block mb-1 font-semibold">
              First name
            </label>

            <input
              type="text"
              id="firstName"
              defaultValue={form.getValues('firstName')}
              {...form.register('firstName')}
              className="w-full p-1 border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 rounded"
            />

            <FieldError message={getErrorMessage('firstName')} />
          </div>

          <div>
            <label htmlFor="lastName" className="block mb-1 font-semibold">
              Last name
            </label>

            <input
              type="text"
              id="lastName"
              defaultValue={form.getValues('lastName')}
              {...form.register('lastName')}
              className="w-full p-1 border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 rounded"
            />

            <FieldError message={getErrorMessage('lastName')} />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>

          <input
            type="email"
            id="email"
            defaultValue={form.getValues('email')}
            {...form.register('email')}
            className="w-full p-1 border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 rounded"
          />

          <FieldError message={getErrorMessage('email')} />
        </div>

        <div className="mb-4">
          <input type="checkbox" id="terms" {...form.register('terms')} className="mr-2" />
          <label htmlFor="terms" className="font-semibold">
            I agree to the terms and conditions
          </label>
          <FieldError message={getErrorMessage('terms')} />
        </div>

        <button
          type="submit"
          disabled={isPending || (!form.formState.isValid && jsEnabled && formDisabledUntilValid)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500"
        >
          {isPending ? 'Submitting...' : 'Submit'}
        </button>

        {state?.message.text !== '' && !state.issues && !isPending ? (
          <div className={`text-${messageColor}-600 dark:text-${messageColor}-400 mt-3`}>
            {state.message.text}
          </div>
        ) : null}

        {state?.issues ? (
          <div className="text-red-600 dark:text-red-400 text-sm mt-3">
            <ul>
              {state.issues.map(issue => (
                <li key={issue.name} className="flex gap-1">
                  {issue.message}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </form>

      <div className={`mt-4 ${jsEnabled ? '' : 'hidden'}`}>
        <input
          type="checkbox"
          id="disabledSubmitCheckbox"
          onChange={() => setFormDisabledUntilValid(!formDisabledUntilValid)}
          className="mr-2"
        />
        <label htmlFor="disabledSubmitCheckbox">Disable form until valid</label>
      </div>
    </>
  );
}
