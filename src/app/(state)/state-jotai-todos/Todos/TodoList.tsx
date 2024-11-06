'use client';

import { useAtomValue } from 'jotai';
import { filteredTodosAtom } from './state';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const filteredTodos = useAtomValue(filteredTodosAtom);

  return (
    <ul className="mt-4 empty:hidden">
      {filteredTodos.map(todo => {
        return (
          <li key={todo.id} className="mb-3 last:mb-0">
            <TodoItem todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};
