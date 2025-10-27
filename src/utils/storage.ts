import { Todo } from '../types/Todo';
import { STORAGE_KEYS } from '../constants';

/**
 * Safely parse JSON from localStorage
 */
export const safeJsonParse = <T>(json: string, fallback: T): T => {
  try {
    return JSON.parse(json);
  } catch {
    console.warn('Failed to parse JSON from localStorage');
    return fallback;
  }
};

/**
 * Load todos from localStorage with error handling
 */
export const loadTodosFromStorage = (): Todo[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.TODOS);
    if (!saved) return [];
    
    const parsed = safeJsonParse(saved, []);
    if (!Array.isArray(parsed)) return [];
    
    return parsed.map((todo: any) => ({
      id: todo.id || crypto.randomUUID(),
      text: todo.text || '',
      completed: Boolean(todo.completed),
      createdAt: todo.createdAt ? new Date(todo.createdAt) : new Date(),
      priority: todo.priority || 'medium',
      category: todo.category || 'personal',
      tags: todo.tags || [],
      notes: todo.notes || '',
      dueDate: todo.dueDate ? new Date(todo.dueDate) : undefined
    }));
  } catch (error) {
    console.warn('Failed to load todos from localStorage:', error);
    return [];
  }
};

/**
 * Save todos to localStorage with error handling
 */
export const saveTodosToStorage = (todos: Todo[]): boolean => {
  try {
    localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(todos));
    return true;
  } catch (error) {
    console.error('Failed to save todos to localStorage:', error);
    return false;
  }
};

