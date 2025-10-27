import { useState, useEffect, useCallback, useMemo } from 'react';
import { Todo, TodoStats, UseTodosReturn } from '../types/Todo';
import { loadTodosFromStorage, saveTodosToStorage } from '../utils/storage';
import { createTodo, validateTodoText } from '../utils/validation';
import { ERROR_MESSAGES } from '../constants';

export const useTodos = (): UseTodosReturn => {
  const [todos, setTodos] = useState<Todo[]>(loadTodosFromStorage);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Save to localStorage with error handling
  useEffect(() => {
    const success = saveTodosToStorage(todos);
    if (success) {
      setError(null);
    } else {
      setError(ERROR_MESSAGES.STORAGE_FAILED);
    }
  }, [todos]);

  const addTodo = useCallback((text: string) => {
    const validation = validateTodoText(text);
    if (!validation.isValid) {
      setError(validation.error || ERROR_MESSAGES.EMPTY_TODO);
      return;
    }
    
    setIsLoading(true);
    const newTodo: Todo = {
      ...createTodo(text),
      priority: 'medium',
      category: 'personal',
      tags: [],
      notes: ''
    };
    setTodos(prev => [newTodo, ...prev]);
    setError(null);
    setIsLoading(false);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  }, []);

  const updateTodo = useCallback((id: string, updates: Partial<Todo>) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, ...updates } : todo
      )
    );
  }, []);

  // Memoize stats calculation
  const stats: TodoStats = useMemo(() => ({
    total: todos.length,
    completed: todos.filter(todo => todo.completed).length,
    remaining: todos.filter(todo => !todo.completed).length,
  }), [todos]);

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    updateTodo,
    stats,
    error,
    isLoading,
  };
};
