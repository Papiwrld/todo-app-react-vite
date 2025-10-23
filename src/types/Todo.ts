export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoStats {
  total: number;
  completed: number;
  remaining: number;
}

export interface TodoState {
  todos: Todo[];
  error: string | null;
  isLoading: boolean;
}

export interface TodoActions {
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  clearCompleted: () => void;
}

export interface UseTodosReturn extends TodoState, TodoActions {
  stats: TodoStats;
}
