import { atomWithImmer } from 'jotai-immer';

export const countAtom = atomWithImmer({ value: 0 });

if (process.env.NODE_ENV !== 'production') {
  countAtom.debugLabel = 'countAtom';
}
