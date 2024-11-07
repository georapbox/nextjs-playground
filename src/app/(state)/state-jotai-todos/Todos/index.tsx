import { TodoFilter } from './TodoFilter';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';

export const Todos = () => {
  return (
    <div className="card max-w-lg">
      <TodoFilter />
      <AddTodo />
      <TodoList />
    </div>
  );
};
