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


// Error messages
export const ERROR_MESSAGES = {
  EMPTY_TODO: 'Please enter a todo',
  TODO_TOO_LONG: 'Todo text must be 100 characters or less',
  STORAGE_FAILED: 'Failed to save todos. Please try again.',
  LOAD_FAILED: 'Failed to load todos from storage.',
} as const;

