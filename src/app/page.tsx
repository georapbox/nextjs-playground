import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Playground',
  description: 'A Next.js playground for testing purposes'
};

export default function Home() {
  return (
    <>
      <h1 className="text-xl sm:text-3xl font-semibold mb-4">Next.js Playground</h1>
      <p className="text-pretty">
        This is a{' '}
        <a
          href="https://nextjs.org/"
          className="text-blue-500 dark:text-blue-300 underline"
          target="_blank"
          rel="noreferer"
        >
          Next.js
        </a>{' '}
        playground for testing purposes.
      </p>
    </>
  );
}
