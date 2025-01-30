import React from 'react';
import { Status } from '../types/Status';
import cn from 'classnames';

type Props = {
  notCompletedTodosCount: number | undefined;
  completedTodosCount: number;
  status: string;
  setStatus: (status: string) => void;
  onClearCompletedTodos: () => void;
};

export const Footer: React.FC<Props> = ({
  notCompletedTodosCount,
  completedTodosCount,
  status,
  setStatus,
  onClearCompletedTodos,
}) => {
  return (
    <>
      <footer className="todoapp__footer" data-cy="Footer">
        <span className="todo-count" data-cy="TodosCounter">
          {notCompletedTodosCount} items left
        </span>

        <nav className="filter" data-cy="Filter">
          {Object.values(Status).map(filterStatus => (
            <a
              href="#/"
              className={cn('filter__link', {
                selected: filterStatus === status,
              })}
              data-cy={`FilterLink${filterStatus}`}
              key={filterStatus}
              onClick={() => setStatus(filterStatus)}
            >
              {filterStatus}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="todoapp__clear-completed"
          data-cy="ClearCompletedButton"
          style={{ visibility: completedTodosCount ? 'visible' : 'hidden' }}
          disabled={!completedTodosCount}
          onClick={onClearCompletedTodos}
        >
          Clear completed
        </button>
      </footer>
    </>
  );
};
