'use server';

let views = 0;

export const increment = async () => {
  return new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(++views);
    }, Math.random() * 1000);
  });
};

export const decrement = async () => {
  return new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(--views);
    }, Math.random() * 1000);
  });
};
