'use client';

import { useRef, useTransition, useState, useEffect } from 'react';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FieldErrors } from 'react-hook-form';
import { z } from 'zod';
import { Spinner } from '@/app/components/Spinner';
import { FieldError } from '@/app/components/FieldError';
import { formSchema } from './formSchema';
import { onSubmitAction } from './actions';

const MultipleCustomFieldErrors = ({
  errors,
  fieldName
}: {
  errors: FieldErrors<z.output<typeof formSchema>>;
  fieldName: keyof z.output<typeof formSchema>;
}) => {
  const customErrors = errors?.[fieldName]?.types?.custom;
  const types = Array.isArray(customErrors) ? customErrors : [customErrors].filter(Boolean);

  if (types.length === 0) {
    return null;
  }

  return (
    <div className="text-red-600 dark:text-red-400 text-sm empty:hidden" aria-live="polite">
      <ul className="list-inside list-disc">
        {types.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
    </div>
  );
};

const getErrorMessage = (
  name: keyof z.output<typeof formSchema>,
  errors: FieldErrors<z.output<typeof formSchema>>
) => {
  return errors?.[name]?.message || '';
};

export function Form() {
  const [jsEnabled, setJsEnabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [clientSideValidationDisabled, setClientSideValidationDisabled] = useState(false);
  const [formDisabledUntilValid, setFormDisabledUntilValid] = useState(false);

  useEffect(() => {
    setJsEnabled(true);
  }, []);

  const [isPending, startTransition] = useTransition();

  const [state, formAction] = useFormState(onSubmitAction, {
    message: { type: 'success', text: '' }
  });

  const form = useForm<z.output<typeof formSchema>>({
    resolver: clientSideValidationDisabled ? undefined : zodResolver(formSchema),
    mode: 'onSubmit', // Default is 'onSubmit', available options 'onSubmit' | 'onBlur' | 'onChange' | 'onTouched' | 'all'
    criteriaMode: 'all',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      terms: false,
      ...(state?.fields ?? {})
    }
  });

  const formRef = useRef<HTMLFormElement>(null);

  const messageColor = state?.message.type === 'success' ? 'green' : 'red';

  return (
    <>
      <form
        ref={formRef}
        action={formAction}
        noValidate={true}
        onSubmit={evt => {
          form.handleSubmit(() => {
            startTransition(() => {
              evt.preventDefault();
              formAction(new FormData(formRef.current!));
            });
          })(evt);
        }}
        className="card max-w-2xl"
      >
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="block mb-1 font-semibold">
              First name <sup className="text-red-600 dark:text-red-400">*</sup>
            </label>

            <input
              type="text"
              id="firstName"
              defaultValue={form.getValues('firstName')}
              {...form.register('firstName')}
              className="input-field leading-none"
            />

            <FieldError message={getErrorMessage('firstName', form.formState.errors)} />
          </div>

          <div className="flex-1">
            <label htmlFor="lastName" className="block mb-1 font-semibold">
              Last name <sup className="text-red-600 dark:text-red-400">*</sup>
            </label>

            <input
              type="text"
              id="lastName"
              defaultValue={form.getValues('lastName')}
              {...form.register('lastName')}
              className="input-field leading-none"
            />

            <FieldError message={getErrorMessage('lastName', form.formState.errors)} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email <sup className="text-red-600 dark:text-red-400">*</sup>
            </label>

            <input
              type="email"
              id="email"
              defaultValue={form.getValues('email')}
              {...form.register('email')}
              className="input-field leading-none"
            />

            <FieldError message={getErrorMessage('email', form.formState.errors)} />
          </div>

          <div className="flex-1">
            <label htmlFor="gender" className="block mb-1 font-semibold">
              Gender
            </label>

            <select
              id="gender"
              defaultValue={form.getValues('gender')}
              {...form.register('gender')}
              className="input-field leading-none"
              style={{ maxHeight: '2.375rem' }}
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <FieldError message={getErrorMessage('gender', form.formState.errors)} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <label htmlFor="password" className="block mb-1 font-semibold">
              Password <sup className="text-red-600 dark:text-red-400">*</sup>
            </label>

            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              defaultValue={form.getValues('password')}
              {...form.register('password')}
              className="input-field leading-none"
            />

            {jsEnabled ? (
              <button
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-7 right-0 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  {showPassword ? (
                    <>
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                    </>
                  ) : (
                    <>
                      <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                    </>
                  )}
                </svg>
              </button>
            ) : null}

            <MultipleCustomFieldErrors errors={form.formState.errors} fieldName="password" />
          </div>
        </div>

        <div className="mb-4">
          <input type="checkbox" id="terms" {...form.register('terms')} className="mr-2" />
          <label htmlFor="terms" className="font-semibold">
            I agree to the terms and conditions{' '}
            <sup className="text-red-600 dark:text-red-400">*</sup>
          </label>
          <FieldError message={getErrorMessage('terms', form.formState.errors)} />
        </div>

        <button
          type="submit"
          className="btn btn-primary flex gap-2 items-center"
          disabled={
            // When JavaScript is disabled, `isValid` will always be `false`.
            // In real life, we wouldn't have a checkbox to disable the form until it's valid (this is provided for demo purposes),
            // so we need to check if JavaScript is enabled. Otherwise, the form will be disabled.
            // Try disabling JavaScript in your browser and remove the `jsEnabled && formDisabledUntilValid && !clientSideValidationDisabled` condition.
            isPending ||
            (!form.formState.isValid &&
              jsEnabled &&
              formDisabledUntilValid &&
              !clientSideValidationDisabled)
          }
        >
          {isPending ? <Spinner /> : null}
          Submit
        </button>

        {state?.message.text !== '' && !state.issues && !isPending ? (
          <div className={`text-${messageColor}-600 dark:text-${messageColor}-400 mt-3`}>
            {state.message.text}
          </div>
        ) : null}

        {state?.issues && !isPending ? (
          <div className="text-red-600 dark:text-red-400 text-sm mt-3">
            <ul>
              {state.issues.map((issue, index) => (
                <li key={index} className="flex gap-1">
                  {issue.message}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </form>

      <div className="mt-4">
        <input
          type="checkbox"
          id="disableClientSideValidationCheckbox"
          disabled={!jsEnabled}
          onChange={() => setClientSideValidationDisabled(!clientSideValidationDisabled)}
          className="mr-2"
        />

        <label htmlFor="disableClientSideValidationCheckbox">
          Disable client-side validation
          <br />
          <small>
            <em>Hint: Better use it on a clean form to avoid confusion.</em>
          </small>
        </label>
      </div>

      <div className="mt-4">
        <input
          type="checkbox"
          id="disabledSubmitCheckbox"
          disabled={!jsEnabled || clientSideValidationDisabled}
          onChange={() => setFormDisabledUntilValid(!formDisabledUntilValid)}
          className="mr-2"
        />

        <label htmlFor="disabledSubmitCheckbox">Disable form until valid</label>
      </div>
    </>
  );
}
