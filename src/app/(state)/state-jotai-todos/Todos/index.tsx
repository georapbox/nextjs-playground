import { TodoFilter } from './TodoFilter';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';

export const Todos = () => {
  return (
    <div className="max-w-lg card">
      <TodoFilter />
      <AddTodo />
      <TodoList />
    </div>
  );
};
