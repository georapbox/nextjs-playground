import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Playground',
  description: 'A Next.js playground for testing purposes'
};

export default function Home() {
  return (
    <>
      <h1 className="text-xl sm:text-3xl font-semibold mb-4">Next.js Playground</h1>

      <p className="text-balance">
        This is a playground for testing purposes. You can navigate between pages using the links
        from the navigation bar on the left.
      </p>
    </>
  );
}
