'use client';

import { Controls } from './Controls';
import { CountValue } from './CountValue';

export const Counter = () => {
  return (
    <div className="inline-flex items-center gap-4 card">
      <Controls control="decrement" />
      <CountValue />
      <Controls control="increment" />
    </div>
  );
};
