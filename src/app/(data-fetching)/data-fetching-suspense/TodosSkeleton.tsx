type Props = {
  count?: number;
};

export function TodosSkeleton(props: Props) {
  const { count } = props;

  return (
    <table className="w-full table">
      <thead>
        <tr>
          <th className="table-cell w-[65px]">Done</th>
          <th className="table-cell">Title</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: count ?? 0 }).map((_, index) => (
          <tr key={index} className="odd:bg-gray-200 dark:odd:bg-gray-700">
            <td className="table-cell text-center">
              <span className="text-xs animate-pulse bg-gray-300 dark:bg-gray-900 w-4 h-5 inline-block"></span>
            </td>
            <td className="table-cell">
              <span className="animate-pulse bg-gray-300 dark:bg-gray-900 w-1/2 h-5 block"></span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
