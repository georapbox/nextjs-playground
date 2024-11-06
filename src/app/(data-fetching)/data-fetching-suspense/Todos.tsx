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
      <div className="card">
        <h3 className="text-red-700 dark:text-red-300">Error fetching todos</h3>
      </div>
    );
  }

  return (
    <table className="w-full table">
      <thead>
        <tr>
          <th className="table-cell">Done</th>
          <th className="table-cell">Title</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo: Todo) => (
          <tr key={todo.id} className="odd:bg-gray-200 dark:odd:bg-gray-700">
            <td className="table-cell text-center">
              <span className="text-xs">{todo.completed ? '✅' : '❌'}</span>
            </td>
            <td className="table-cell">{todo.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
