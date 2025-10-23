// App configuration
export const APP_CONFIG = {
  name: 'Todo App',
  description: 'Stay organized and get things done!',
  version: '1.0.0',
  maxTodoLength: 100,
  storageKey: 'todos',
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  TODOS: 'todos',
  SETTINGS: 'todo-settings',
} as const;

// Keyboard shortcuts
export const KEYBOARD_SHORTCUTS = {
  FOCUS_INPUT: 'ctrl+enter',
  TOGGLE_TODO: 'enter',
  DELETE_TODO: 'delete',
} as const;

// CSS class names
export const CSS_CLASSES = {
  TODO_ITEM: 'todo-item',
  TODO_COMPLETED: 'completed',
  ERROR_STATE: 'error',
  LOADING_STATE: 'loading',
} as const;

// Error messages
export const ERROR_MESSAGES = {
  EMPTY_TODO: 'Please enter a todo',
  TODO_TOO_LONG: 'Todo text must be 100 characters or less',
  STORAGE_FAILED: 'Failed to save todos. Please try again.',
  LOAD_FAILED: 'Failed to load todos from storage.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  TODO_ADDED: 'Todo added successfully',
  TODO_COMPLETED: 'Todo marked as complete',
  TODO_DELETED: 'Todo deleted',
  COMPLETED_CLEARED: 'Completed todos cleared',
} as const;
