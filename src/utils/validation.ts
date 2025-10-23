import { APP_CONFIG, ERROR_MESSAGES } from '../constants';

/**
 * Validate todo text
 */
export const validateTodoText = (text: string): { isValid: boolean; error?: string } => {
  const trimmedText = text.trim();
  
  if (!trimmedText) {
    return { isValid: false, error: ERROR_MESSAGES.EMPTY_TODO };
  }
  
  if (trimmedText.length > APP_CONFIG.maxTodoLength) {
    return { isValid: false, error: ERROR_MESSAGES.TODO_TOO_LONG };
  }
  
  return { isValid: true };
};

/**
 * Sanitize todo text
 */
export const sanitizeTodoText = (text: string): string => {
  return text.trim().slice(0, APP_CONFIG.maxTodoLength);
};

/**
 * Generate unique ID
 */
export const generateId = (): string => {
  return crypto.randomUUID();
};

/**
 * Create a new todo object
 */
export const createTodo = (text: string) => {
  const sanitizedText = sanitizeTodoText(text);
  return {
    id: generateId(),
    text: sanitizedText,
    completed: false,
    createdAt: new Date(),
  };
};
