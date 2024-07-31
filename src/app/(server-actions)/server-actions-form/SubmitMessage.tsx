import { useFormStatus } from 'react-dom';
import { User } from './types';

type Props = {
  user: User | null;
};

export const SubmitMessage = (props: Props) => {
  const { user } = props;
  const { pending } = useFormStatus();

  return user && !pending ? (
    <div className="mt-4">
      <pre className="bg-gray-300 dark:bg-gray-800 p-2 rounded text-sm">
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  ) : null;
};
