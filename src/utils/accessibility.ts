/**
 * Accessibility utilities for keyboard navigation and screen readers
 */

/**
 * Generate ARIA label for todo item
 */
export const getTodoAriaLabel = (text: string, completed: boolean): string => {
  return `Mark "${text}" as ${completed ? 'incomplete' : 'complete'}`;
};

/**
 * Generate ARIA label for delete button
 */
export const getDeleteAriaLabel = (text: string): string => {
  return `Delete "${text}"`;
};

/**
 * Handle keyboard navigation for todo items
 */
export const handleTodoKeyDown = (
  event: React.KeyboardEvent,
  onToggle: () => void,
  onDelete: () => void
): void => {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault();
      onToggle();
      break;
    case 'Delete':
    case 'Backspace':
      event.preventDefault();
      onDelete();
      break;
  }
};

/**
 * Handle keyboard shortcuts for global actions
 */
export const handleGlobalKeyDown = (
  event: KeyboardEvent,
  onFocusInput: () => void
): void => {
  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
    event.preventDefault();
    onFocusInput();
  }
};

