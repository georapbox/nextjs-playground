'use client';

import { FormEvent } from 'react';
import { useSetAtom } from 'jotai';
import { todosAtom } from './state';

export const AddTodo = () => {
  const setTodos = useSetAtom(todosAtom);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    const value = form['add-todo']?.value;

    if (!value) {
      return;
    }

    setTodos(draft => {
      draft.push({ id: crypto.randomUUID(), title: value, completed: false });
    });

    form.reset();
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <input type="text" name="add-todo" placeholder="Add TODO" className="input-field" />
    </form>
  );
};
