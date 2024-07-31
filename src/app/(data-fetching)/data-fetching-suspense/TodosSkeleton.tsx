type Props = {
  count?: number;
};

export function TodosSkeleton(props: Props) {
  const { count } = props;

  return (
    <table className="table-auto bg-slate-100 dark:bg-slate-800 w-full border-collapse border border-slate-400 rounded">
      <thead>
        <tr>
          <th className="border border-slate-400 p-2 w-[65px]">Done</th>
          <th className="border border-slate-400 p-2">Title</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: count ?? 0 }).map((_, index) => (
          <tr key={index} className="odd:bg-slate-200 dark:odd:bg-slate-700">
            <td className="border border-slate-400 p-2 text-center">
              <span className="text-xs animate-pulse bg-slate-300 dark:bg-slate-900 w-4 h-4 block"></span>
            </td>
            <td className="border border-slate-400 p-2">
              <span className="animate-pulse bg-slate-300 dark:bg-slate-900 w-1/2 h-4 block"></span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
