'use client';

import { useSetAtom } from 'jotai';
import { filterAtom } from './state';

export const TodoFilter = () => {
  const setFilter = useSetAtom(filterAtom);

  const handleChange = (evt: React.ChangeEvent<HTMLFormElement>) => {
    const currentFilter = evt.target.value;
    setFilter(currentFilter);
  };

  return (
    <form className="flex flex-wrap gap-x-4" onChange={handleChange}>
      <div className="inline-flex gap-x-1">
        <input
          type="radio"
          name="filter"
          value="all"
          id="filter-all"
          className="cursor-pointer"
          defaultChecked
        />
        <label htmlFor="filter-all" className="cursor-pointer">
          All
        </label>
      </div>

      <div className="inline-flex gap-x-1">
        <input
          type="radio"
          name="filter"
          value="completed"
          id="filter-completed"
          className="cursor-pointer"
        />
        <label htmlFor="filter-completed" className="cursor-pointer">
          Completed
        </label>
      </div>

      <div className="inline-flex gap-x-1">
        <input
          type="radio"
          name="filter"
          value="incompleted"
          id="filter-incompleted"
          className="cursor-pointer"
        />
        <label htmlFor="filter-incompleted" className="cursor-pointer">
          Incompleted
        </label>
      </div>
    </form>
  );
};
