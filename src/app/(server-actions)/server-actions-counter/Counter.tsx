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
      <button disabled={isPending} onClick={decrementCount} className="btn btn-primary text-2xl">
        -
      </button>

      <span className="text-lg font-semibold">{views}</span>

      <button disabled={isPending} onClick={incrementCount} className="btn btn-primary text-2xl">
        +
      </button>
    </div>
  );
}
