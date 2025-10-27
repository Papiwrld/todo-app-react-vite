import { useEffect, useState, useMemo } from 'react';
import { AddTodo, Stats } from './components';
import ThemeToggle from './components/ThemeToggle';
import SearchAndFilter from './components/SearchAndFilter';
import AdvancedTodoItem from './components/AdvancedTodoItem';
import { useTodos } from './hooks/useTodos';
import { APP_CONFIG } from './constants';
import { TodoFilter, TodoCategory } from './types/Todo';
import './App.css';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted, updateTodo, stats, error, isLoading } = useTodos();
  
  // Advanced features state
  const [filter, setFilter] = useState<TodoFilter>({
    search: '',
    category: '',
    priority: '',
    status: 'all',
    dueDate: 'all'
  });

  // Default categories
  const categories: TodoCategory[] = [
    { id: 'work', name: 'Work', color: '#007AFF', icon: '💼' },
    { id: 'personal', name: 'Personal', color: '#34C759', icon: '🏠' },
    { id: 'shopping', name: 'Shopping', color: '#FF9500', icon: '🛒' },
    { id: 'health', name: 'Health', color: '#FF3B30', icon: '🏥' },
    { id: 'finance', name: 'Finance', color: '#AF52DE', icon: '💰' },
    { id: 'education', name: 'Education', color: '#5AC8FA', icon: '📚' }
  ];

  // Filter and search todos
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      // Search filter
      if (filter.search && !todo.text.toLowerCase().includes(filter.search.toLowerCase())) {
        return false;
      }

      // Category filter
      if (filter.category && todo.category !== filter.category) {
        return false;
      }

      // Priority filter
      if (filter.priority && todo.priority !== filter.priority) {
        return false;
      }

      // Status filter
      if (filter.status === 'active' && todo.completed) {
        return false;
      }
      if (filter.status === 'completed' && !todo.completed) {
        return false;
      }

      // Due date filter
      if (filter.dueDate !== 'all' && todo.dueDate) {
        const today = new Date();
        const dueDate = new Date(todo.dueDate);
        const isToday = dueDate.toDateString() === today.toDateString();
        const isOverdue = dueDate < today;
        const isUpcoming = dueDate > today;

        if (filter.dueDate === 'today' && !isToday) return false;
        if (filter.dueDate === 'overdue' && !isOverdue) return false;
        if (filter.dueDate === 'upcoming' && !isUpcoming) return false;
      }

      return true;
    });
  }, [todos, filter]);


  // Set page title dynamically
  useEffect(() => {
    const title = stats.total > 0 
      ? `${APP_CONFIG.name} (${stats.remaining} remaining)` 
      : `${APP_CONFIG.name} - ${APP_CONFIG.description}`;
    document.title = title;
  }, [stats.total, stats.remaining]);

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>{APP_CONFIG.name}</h1>
          <p className="subtitle">{APP_CONFIG.description}</p>
          <ThemeToggle />
        </header>

        <main className="app-main">
          {error && (
            <div className="error-banner" role="alert">
              {error}
            </div>
          )}
          
          <AddTodo onAdd={addTodo} isLoading={isLoading} />
          
          <SearchAndFilter 
            filter={filter}
            onFilterChange={setFilter}
            categories={categories}
          />
          
          {stats.total > 0 && (
            <Stats 
              total={stats.total}
              completed={stats.completed}
              remaining={stats.remaining}
              onClearCompleted={clearCompleted}
            />
          )}

          <div className="todo-list" role="list">
            {filteredTodos.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📝</div>
                <h3>
                  {filter.search || filter.category || filter.priority || filter.status !== 'all' || filter.dueDate !== 'all'
                    ? 'No todos match your filters'
                    : 'No todos yet!'
                  }
                </h3>
                <p>
                  {filter.search || filter.category || filter.priority || filter.status !== 'all' || filter.dueDate !== 'all'
                    ? 'Try adjusting your search or filters to see more todos.'
                    : 'Add your first todo above to get started.'
                  }
                </p>
              </div>
            ) : (
              filteredTodos.map((todo) => (
                <AdvancedTodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onUpdate={updateTodo}
                  categories={categories}
                />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;