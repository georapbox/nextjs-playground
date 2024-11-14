'use client';

import { useFormStatus } from 'react-dom';
import { Spinner } from '@/app/components/Spinner';

type Props = {
  handleSubmit: any;
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary flex gap-2 items-center" disabled={pending}>
      {pending ? <Spinner /> : null}
      Submit
    </button>
  );
};

export const Form = (props: Props) => {
  const { handleSubmit } = props;

  return (
    <form className="card max-w-md" action={handleSubmit}>
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

      <SubmitButton />
    </form>
  );
};
