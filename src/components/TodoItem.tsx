import React, { memo, useCallback } from 'react';
import { TodoItemProps } from '../types/components';
import { getTodoAriaLabel, getDeleteAriaLabel, handleTodoKeyDown } from '../utils/accessibility';

const TodoItem: React.FC<TodoItemProps> = memo(({ todo, onToggle, onDelete }) => {
  const handleToggle = useCallback(() => {
    onToggle(todo.id);
  }, [onToggle, todo.id]);

  const handleDelete = useCallback(() => {
    onDelete(todo.id);
  }, [onDelete, todo.id]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    handleTodoKeyDown(e, handleToggle, handleDelete);
  }, [handleToggle, handleDelete]);

  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="listitem"
    >
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="todo-checkbox"
          aria-label={getTodoAriaLabel(todo.text, todo.completed)}
        />
        <span className="todo-text">{todo.text}</span>
      </div>
      <button
        onClick={handleDelete}
        className="delete-btn"
        aria-label={getDeleteAriaLabel(todo.text)}
        title="Delete todo"
      >
        ×
      </button>
    </div>
  );
});

TodoItem.displayName = 'TodoItem';

export default TodoItem;
