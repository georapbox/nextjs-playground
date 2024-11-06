import { useAtomValue } from 'jotai';
import { countAtom } from './state';

export const CountValue = () => {
  const count = useAtomValue(countAtom);
  return <span className="text-lg font-semibold">{count.value}</span>;
};
