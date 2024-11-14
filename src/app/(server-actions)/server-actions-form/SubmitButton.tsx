import { useFormStatus } from 'react-dom';
import { Spinner } from '@/app/components/Spinner';

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary flex gap-2 items-center" disabled={pending}>
      {pending ? <Spinner /> : null}
      Submit
    </button>
  );
};
