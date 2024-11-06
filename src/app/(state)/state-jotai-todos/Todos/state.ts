import { atom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export const filterAtom = atom('all');

export const todosAtom = atomWithImmer<Todo[]>([
  {
    id: '1',
    title: 'Learn Jotai',
    completed: false
  },
  {
    id: '2',
    title: 'Learn Recoil',
    completed: false
  },
  {
    id: '3',
    title: 'Learn Redux',
    completed: true
  }
]);

export const filteredTodosAtom = atom<Todo[]>(get => {
  const filter = get(filterAtom);
  const todos = get(todosAtom);

  return todos.filter(todo => {
    if (filter === 'completed') {
      return todo.completed;
    }

    if (filter === 'incompleted') {
      return !todo.completed;
    }

    return true;
  });
});

if (process.env.NODE_ENV !== 'production') {
  filterAtom.debugLabel = 'filterAtom';
  todosAtom.debugLabel = 'todosAtom';
  filteredTodosAtom.debugLabel = 'filteredTodosAtom';
}
