import { TodoFilter } from './TodoFilter';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';

export const Todos = () => {
  return (
    <div className="p-4 max-w-[30rem] rounded-lg border border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-900">
      <TodoFilter />
      <AddTodo />
      <TodoList />
    </div>
  );
};
