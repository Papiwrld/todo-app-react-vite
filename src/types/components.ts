import { Todo } from './Todo';

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export interface AddTodoProps {
  onAdd: (text: string) => void;
  isLoading?: boolean;
}

export interface StatsProps {
  total: number;
  completed: number;
  remaining: number;
  onClearCompleted: () => void;
}
