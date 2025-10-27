export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  priority: 'low' | 'medium' | 'high';
  category: string;
  dueDate?: Date;
  tags: string[];
  notes?: string;
}

export interface TodoCategory {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface TodoFilter {
  search: string;
  category: string;
  priority: string;
  status: 'all' | 'active' | 'completed';
  dueDate: 'all' | 'today' | 'overdue' | 'upcoming';
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
  updateTodo: (id: string, updates: Partial<Todo>) => void;
}
