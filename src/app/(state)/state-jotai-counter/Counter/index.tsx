'use client';

import { useAtomValue } from 'jotai';
import { countAtom } from './state';
import { Controls } from './Controls';
import { CountValue } from './CountValue';

export const Counter = () => {
  const count = useAtomValue(countAtom);

  return (
    <div className="inline-flex items-center gap-4 border border-gray-400 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 rounded-lg px-5 py-6">
      <Controls control="decrement" />
      <CountValue />
      <Controls control="increment" />
    </div>
  );
};
