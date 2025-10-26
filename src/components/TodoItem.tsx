import React, { memo, useCallback, useState, useEffect } from 'react';
import { TodoItemProps } from '../types/components';
import { getTodoAriaLabel, getDeleteAriaLabel, handleTodoKeyDown } from '../utils/accessibility';

const TodoItem: React.FC<TodoItemProps> = memo(({ todo, onToggle, onDelete }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleToggle = useCallback(() => {
    onToggle(todo.id);
  }, [onToggle, todo.id]);

  const handleDelete = useCallback(() => {
    if (showDeleteConfirm) {
      setIsDeleting(true);
      // Use requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        setTimeout(() => {
          onDelete(todo.id);
          setIsDeleting(false);
        }, 300);
      });
    } else {
      setShowDeleteConfirm(true);
    }
  }, [onDelete, todo.id, showDeleteConfirm]);

  // Auto-hide delete confirmation after 3 seconds
  useEffect(() => {
    if (showDeleteConfirm) {
      const timer = setTimeout(() => setShowDeleteConfirm(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showDeleteConfirm]);

  const handleCancelDelete = useCallback(() => {
    setShowDeleteConfirm(false);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    handleTodoKeyDown(e, handleToggle, handleDelete);
  }, [handleToggle, handleDelete]);

  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''} ${isDeleting ? 'deleting' : ''}`}
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
      <div className="todo-actions">
        {showDeleteConfirm ? (
          <div className="delete-confirm">
            <button
              onClick={handleDelete}
              className="confirm-delete-btn"
              aria-label="Confirm delete"
            >
              ✓
            </button>
            <button
              onClick={handleCancelDelete}
              className="cancel-delete-btn"
              aria-label="Cancel delete"
            >
              ✕
            </button>
          </div>
        ) : (
          <button
            onClick={handleDelete}
            className="delete-btn"
            aria-label={getDeleteAriaLabel(todo.text)}
            title="Delete todo"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
});

TodoItem.displayName = 'TodoItem';

export default TodoItem;
