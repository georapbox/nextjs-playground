'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useFlashMessage } from '@/lib/flash-message/client/useFlashMessage';
import type { FlashMessageSchema } from '@/lib/flash-message/config';
import { sleep } from '@/lib/utils/sleep';
import { Spinner } from '@/app/components/Spinner';

export const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { setFlashMessage } = useFlashMessage();

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const data = Object.fromEntries(new FormData(evt.currentTarget));

    setIsSubmitting(true);
    await sleep(500);
    setIsSubmitting(false);

    setFlashMessage({
      message: `Form was submitted by ${data.username}.`,
      severity: data.severity as FlashMessageSchema['severity']
    });

    router.push('/flash-message-client/feedback');
  };

  return (
    <form className="card max-w-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="username" className="block mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="input-field"
          required
          defaultValue="John Doe"
        />
      </div>

      <div className="mb-4">
        <div className="mb-2">Severity</div>

        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <div className="inline-flex gap-1">
            <input type="radio" id="info" name="severity" value="info" defaultChecked />
            <label htmlFor="info">Info</label>
          </div>

          <div className="inline-flex gap-1">
            <input type="radio" id="success" name="severity" value="success" />
            <label htmlFor="success">Success</label>
          </div>

          <div className="inline-flex gap-1">
            <input type="radio" id="warning" name="severity" value="warning" />
            <label htmlFor="warning">Warning</label>
          </div>

          <div className="inline-flex gap-1">
            <input type="radio" id="error" name="severity" value="error" />
            <label htmlFor="error">Error</label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary flex gap-2 items-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Spinner /> : null}
        Submit
      </button>
    </form>
  );
};
