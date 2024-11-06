import { useSetAtom } from 'jotai';
import { countAtom } from './state';

type Props = {
  control: 'increment' | 'decrement';
};

export const Controls = (props: Props) => {
  const { control } = props;
  const setCount = useSetAtom(countAtom);

  const increment = () => {
    setCount(prev => {
      prev.value += 1;
    });
  };

  const decrement = () => {
    setCount(prev => {
      prev.value -= 1;
    });
  };

  const handleClick = () => {
    switch (control) {
      case 'increment':
        increment();
        break;
      case 'decrement':
        decrement();
        break;
      default:
        break;
    }
  };

  return (
    <button
      type="button"
      className="px-4 py-1 rounded-lg bg-gray-500 text-white text-2xl hover:bg-gray-700"
      onClick={handleClick}
    >
      {control === 'increment' ? '+' : control === 'decrement' ? '-' : '?'}
    </button>
  );
};
