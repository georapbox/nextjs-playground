type Props = {
  count?: number;
};

export function UsersSkeleton(props: Props) {
  const { count } = props;

  return (
    <>
      <h2 className="text-md font-semibold mb-3">Users</h2>
      <ul>
        {Array.from({ length: count ?? 0 }).map((_, index) => (
          <li key={index} className="mb-3 last:mb-0 card">
            <h3 className="animate-pulse bg-neutral-300 dark:bg-neutral-700 w-1/2 h-4 mb-2"></h3>
            <p className="animate-pulse bg-neutral-300 dark:bg-neutral-700 w-1/4 h-4"></p>
          </li>
        ))}
      </ul>
    </>
  );
}
