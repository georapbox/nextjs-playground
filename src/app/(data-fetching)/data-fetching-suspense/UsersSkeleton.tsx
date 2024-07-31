type Props = {
  count?: number;
};

export function UsersSkeleton(props: Props) {
  const { count } = props;

  return (
    <ul>
      {Array.from({ length: count ?? 0 }).map((_, index) => (
        <li
          key={index}
          className="rounded p-4 bg-slate-100 dark:bg-slate-800 border border-gray-400 mb-3 last:mb-0"
        >
          <h3 className="animate-pulse bg-slate-300 dark:bg-slate-900 w-1/2 h-4 mb-2"></h3>
          <p className="animate-pulse bg-slate-300 dark:bg-slate-900 w-1/4 h-4"></p>
        </li>
      ))}
    </ul>
  );
}
