import { sleep } from '@/lib/utils/sleep';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export async function Todos() {
  await sleep(1000);
  const todosReq = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await todosReq.json();

  if (!todos || !Array.isArray(todos)) {
    return (
      <div className="bg-slate-100 dark:bg-slate-800 w-full border-collapse border border-slate-400 p-4 rounded">
        <h3 className="text-red-700 dark:text-red-300">Error fetching todos</h3>
      </div>
    );
  }

  return (
    <table className="table-auto bg-slate-100 dark:bg-slate-800 w-full border-collapse border border-slate-400">
      <thead>
        <tr>
          <th className="border border-slate-400 p-2">Done</th>
          <th className="border border-slate-400 p-2">Title</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo: Todo) => (
          <tr key={todo.id} className="odd:bg-slate-200 dark:odd:bg-slate-700">
            <td className="border border-slate-400 p-2 text-center">
              <span className="text-xs">{todo.completed ? '✅' : '❌'}</span>
            </td>
            <td className="border border-slate-400 p-2">{todo.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
