import React, { memo, useCallback, useState, useEffect } from 'react';
import { Todo } from '../types/Todo';
import { getTodoAriaLabel, getDeleteAriaLabel, handleTodoKeyDown } from '../utils/accessibility';

interface AdvancedTodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updates: Partial<Todo>) => void;
  categories: Array<{ id: string; name: string; color: string }>;
}

const AdvancedTodoItem: React.FC<AdvancedTodoItemProps> = memo(({ 
  todo, 
  onToggle, 
  onDelete, 
  onUpdate,
  categories 
}) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleToggle = useCallback(() => {
    onToggle(todo.id);
  }, [onToggle, todo.id]);

  const handleDelete = useCallback(() => {
    if (showDeleteConfirm) {
      setIsDeleting(true);
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

  const handleEdit = useCallback(() => {
    setIsEditing(true);
    setEditText(todo.text);
  }, [todo.text]);

  const handleSaveEdit = useCallback(() => {
    if (editText.trim()) {
      onUpdate(todo.id, { text: editText.trim() });
      setIsEditing(false);
    }
  }, [editText, onUpdate, todo.id]);

  const handleCancelEdit = useCallback(() => {
    setIsEditing(false);
    setEditText(todo.text);
  }, [todo.text]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (isEditing) {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSaveEdit();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleCancelEdit();
      }
    } else {
      handleTodoKeyDown(e, handleToggle, handleDelete);
    }
  }, [isEditing, handleSaveEdit, handleCancelEdit, handleToggle, handleDelete]);

  // Mobile touch optimizations
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    // Add visual feedback for touch
    const target = e.currentTarget as HTMLElement;
    target.style.transform = 'scale(0.98)';
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    // Remove visual feedback
    const target = e.currentTarget as HTMLElement;
    target.style.transform = '';
  }, []);

  const handlePriorityChange = useCallback((priority: 'low' | 'medium' | 'high') => {
    onUpdate(todo.id, { priority });
  }, [onUpdate, todo.id]);


  // Auto-hide delete confirmation after 3 seconds
  useEffect(() => {
    if (showDeleteConfirm) {
      const timer = setTimeout(() => setShowDeleteConfirm(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showDeleteConfirm]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#FF3B30';
      case 'medium': return '#FF9500';
      case 'low': return '#34C759';
      default: return '#8E8E93';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '⚪';
    }
  };

  const category = categories.find(cat => cat.id === todo.category);
  const isOverdue = todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed;

  return (
    <div 
      className={`advanced-todo-item ${todo.completed ? 'completed' : ''} ${isDeleting ? 'deleting' : ''} ${isOverdue ? 'overdue' : ''}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="listitem"
    >
      <div className="todo-main-content">
        <div className="todo-checkbox-container">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
            className="todo-checkbox"
            aria-label={getTodoAriaLabel(todo.text, todo.completed)}
          />
        </div>

        <div className="todo-content">
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="todo-edit-input"
              autoFocus
              onBlur={handleSaveEdit}
            />
          ) : (
            <div className="todo-text-container">
              <span className="todo-text">{todo.text}</span>
              {todo.notes && (
                <span className="todo-notes">{todo.notes}</span>
              )}
            </div>
          )}

          <div className="todo-meta">
            <div className="todo-priority">
              <button
                onClick={() => handlePriorityChange(todo.priority === 'high' ? 'medium' : todo.priority === 'medium' ? 'low' : 'high')}
                className="priority-btn"
                style={{ color: getPriorityColor(todo.priority) }}
                title={`Priority: ${todo.priority}`}
              >
                {getPriorityIcon(todo.priority)}
              </button>
            </div>

            {category && (
              <div className="todo-category" style={{ backgroundColor: category.color + '20', color: category.color }}>
                {category.name}
              </div>
            )}

            {todo.dueDate && (
              <div className={`todo-due-date ${isOverdue ? 'overdue' : ''}`}>
                📅 {new Date(todo.dueDate).toLocaleDateString()}
              </div>
            )}

            {todo.tags.length > 0 && (
              <div className="todo-tags">
                {todo.tags.map(tag => (
                  <span key={tag} className="todo-tag">#{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="todo-actions">
        {isEditing ? (
          <div className="edit-actions">
            <button
              onClick={handleSaveEdit}
              className="save-btn"
              aria-label="Save changes"
            >
              ✓
            </button>
            <button
              onClick={handleCancelEdit}
              className="cancel-btn"
              aria-label="Cancel editing"
            >
              ✕
            </button>
          </div>
        ) : showDeleteConfirm ? (
          <div className="delete-confirm">
            <button
              onClick={handleDelete}
              className="confirm-delete-btn"
              aria-label="Confirm delete"
            >
              ✓
            </button>
            <button
              onClick={() => setShowDeleteConfirm(false)}
              className="cancel-delete-btn"
              aria-label="Cancel delete"
            >
              ✕
            </button>
          </div>
        ) : (
          <div className="action-buttons">
            <button
              onClick={handleEdit}
              className="edit-btn"
              aria-label="Edit todo"
              title="Edit todo"
            >
              ✏️
            </button>
            <button
              onClick={handleDelete}
              className="delete-btn"
              aria-label={getDeleteAriaLabel(todo.text)}
              title="Delete todo"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

AdvancedTodoItem.displayName = 'AdvancedTodoItem';

export default AdvancedTodoItem;
