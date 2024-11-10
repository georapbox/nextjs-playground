'use client';

import Link from 'next/link';

export default function GlobalError() {
  return (
    <html>
      <body className="min-h-screen">
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
          <h1 className="text-lg font-semibold">Something went wrong!</h1>

          <Link href="/" className="link">
            Return to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
