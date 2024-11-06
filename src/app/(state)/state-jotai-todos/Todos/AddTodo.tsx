'use client';

import { useSetAtom } from 'jotai';
import { todosAtom } from './state';

export const AddTodo = () => {
  const setTodos = useSetAtom(todosAtom);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    const value = form['add-todo']?.value;

    if (!value) {
      return;
    }

    setTodos(prev => [...prev, { id: crypto.randomUUID(), title: value, completed: false }]);

    form.reset();
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="add-todo"
        placeholder="Add TODO"
        className="w-full p-1 border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 rounded"
      />
    </form>
  );
};
