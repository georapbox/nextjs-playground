import type { Metadata } from 'next';
import Link from 'next/link';
import { Counter } from './Counter';

export const metadata: Metadata = {
  title: 'Counter - Server Actions'
};

export default function CounterPage() {
  return (
    <>
      <h1 className="text-xl font-bold mb-8">Counter - Server Actions</h1>
      <Counter initial={0} />
    </>
  );
}
