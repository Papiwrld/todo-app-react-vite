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

/**
 * Announce to screen readers
 */
export const announceToScreenReader = (message: string): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.style.position = 'absolute';
  announcement.style.left = '-10000px';
  announcement.style.width = '1px';
  announcement.style.height = '1px';
  announcement.style.overflow = 'hidden';
  
  document.body.appendChild(announcement);
  announcement.textContent = message;
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};
