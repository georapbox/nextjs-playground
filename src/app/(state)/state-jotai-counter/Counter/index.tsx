'use client';

import { useAtomValue } from 'jotai';
import { countAtom } from './state';
import { Controls } from './Controls';
import { CountValue } from './CountValue';

export const Counter = () => {
  const count = useAtomValue(countAtom);

  return (
    <div className="inline-flex items-center gap-4 card">
      <Controls control="decrement" />
      <CountValue />
      <Controls control="increment" />
    </div>
  );
};
