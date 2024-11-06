'use client';

import { increment, decrement } from './actions';
import { useState, useTransition } from 'react';

type Props = {
  initial: number;
};

export function Counter(props: Props) {
  const { initial } = props;
  const [views, setViews] = useState(initial);
  const [isPending, startTransition] = useTransition();

  const incrementCount = () => {
    startTransition(() => {
      (async () => {
        const updated = await increment();
        setViews(updated);
      })();
    });
  };

  const decrementCount = () => {
    startTransition(() => {
      (async () => {
        const updated = await decrement();
        setViews(updated);
      })();
    });
  };

  return (
    <div className="inline-flex items-center gap-4 card">
      <button
        className={`px-4 py-1 rounded-lg bg-gray-500 text-white text-2xl ${isPending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
        disabled={isPending}
        onClick={decrementCount}
      >
        -
      </button>

      <span className="text-lg font-semibold">{views}</span>

      <button
        className={`px-4 py-1 rounded-lg bg-gray-500 text-white text-2xl ${isPending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
        disabled={isPending}
        onClick={incrementCount}
      >
        +
      </button>
    </div>
  );
}
