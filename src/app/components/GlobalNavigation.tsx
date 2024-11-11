import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  {
    category: 'Data Fetching',
    links: [
      { title: 'Suspense', href: '/data-fetching-suspense' },
      { title: 'Error Handling', href: '/data-fetching-error-handling' }
    ]
  },
  {
    category: 'Server Actions',
    links: [
      { title: 'Counter', href: '/server-actions-counter' },
      { title: 'Form - Vanilla', href: '/server-actions-form' },
      { title: 'Form - RHF', href: '/server-actions-form-rhf' }
    ]
  },
  {
    category: 'State - Jotai',
    links: [
      { title: 'Todos', href: '/state-jotai-todos' },
      { title: 'Counter', href: '/state-jotai-counter' }
    ]
  }
];

export const GlobalNavigation = () => {
  return (
    <nav className="border-r border-neutral-300 dark:border-neutral-600 h-screen overflow-y-auto hide-scrollbars">
      <Link href="/" className="block m-5 sm:m-8 ">
        <Image
          className="inline-block dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
          style={{ minWidth: 130 }}
        />
      </Link>

      {navigation.map(({ category, links }) => (
        <div key={category} className="pb-3">
          <h2 className="text-lg font-semibold px-3 py-2">{category}</h2>

          <ul>
            {links.map(({ title, href }) => (
              <li key={href}>
                <Link
                  className="underline hover:text-blue-500 dark:hover:text-blue-300 px-3 py-1"
                  href={href}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
