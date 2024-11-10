import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center place-content-center text-center h-full">
      <div className="text-8xl font-semibold">404</div>
      <h1 className="text-lg mb-4">The requested resource could not be found</h1>
      <p>
        <Link href="/" className="link">
          Return Home
        </Link>
      </p>
    </div>
  );
}
