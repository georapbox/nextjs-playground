import { useSetAtom } from 'jotai';
import { Todo, todosAtom } from './state';

type Props = {
  todo: Todo;
};

export const TodoItem = (props: Props) => {
  const { todo } = props;
  const setTodos = useSetAtom(todosAtom);

  const handleComplete = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTodos(prev => {
      return prev.map(todoItem => {
        if (todoItem.id === todo.id) {
          return { ...todoItem, completed: evt.target.checked };
        }

        return todoItem;
      });
    });
  };

  const handleDelete = () => {
    setTodos(prev => prev.filter(todoItem => todoItem.id !== todo.id));
  };

  return (
    <div className="flex justify-content-between align-items-center gap-2">
      <div className="flex-1 flex gap-2">
        <input
          type="checkbox"
          id={todo.id}
          defaultChecked={todo.completed}
          onChange={handleComplete}
          className="cursor-pointer"
        />
        <label
          htmlFor={todo.id}
          className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}
        >
          {todo.title}
        </label>
      </div>

      <button
        type="button"
        className="bg-red-500 text-white rounded p-1 self-center"
        onClick={handleDelete}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="0.9em"
          height="0.9em"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </button>
    </div>
  );
};
