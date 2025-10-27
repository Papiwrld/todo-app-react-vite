import React, { useState, useCallback, useRef, useEffect } from 'react';
import { AddTodoProps } from '../types/components';
import { validateTodoText } from '../utils/validation';
import { handleGlobalKeyDown } from '../utils/accessibility';
import { ERROR_MESSAGES } from '../constants';

const AddTodo: React.FC<AddTodoProps> = ({ onAdd, isLoading = false }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateTodoText(text);
    
    if (!validation.isValid) {
      setError(validation.error || ERROR_MESSAGES.EMPTY_TODO);
      return;
    }
    
    setError('');
    onAdd(text.trim());
    setText('');
  }, [text, onAdd]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (error) setError('');
  }, [error]);

  // Focus input on mount and add keyboard shortcuts
  useEffect(() => {
    // Only auto-focus on desktop to avoid mobile keyboard issues
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (!isMobile && inputRef.current) {
      inputRef.current.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      handleGlobalKeyDown(e, () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      });
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Mobile optimizations
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    // Prevent zoom on iOS when focusing input
    const preventZoom = () => {
      if (window.innerWidth < 768) {
        input.style.fontSize = '16px';
      }
    };

    // Add mobile-specific input attributes
    if (window.innerWidth < 768) {
      input.setAttribute('autocomplete', 'off');
      input.setAttribute('autocorrect', 'off');
      input.setAttribute('autocapitalize', 'off');
      input.setAttribute('spellcheck', 'false');
      input.setAttribute('inputmode', 'text');
    }

    input.addEventListener('focus', preventZoom);
    return () => input.removeEventListener('focus', preventZoom);
  }, []);

  // Handle mobile keyboard events
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  }, [handleSubmit]);

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Add a new todo..."
          className={`add-todo-input ${error ? 'error' : ''}`}
          maxLength={100}
          aria-label="Add new todo"
          aria-describedby={error ? 'todo-error' : undefined}
        />
        <button 
          type="submit" 
          className="add-todo-btn"
          disabled={!text.trim() || isLoading}
          aria-label="Add todo"
        >
          {isLoading ? (
            <>
              <span className="loading-spinner"></span>
              Adding...
            </>
          ) : (
            'Add'
          )}
        </button>
      </div>
      {error && (
        <div id="todo-error" className="error-message" role="alert">
          {error}
        </div>
      )}
      <div className="keyboard-hint">
        💡 Press <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to focus input • <kbd>Enter</kbd> to add todo
      </div>
    </form>
  );
};

export default AddTodo;
