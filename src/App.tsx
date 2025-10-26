import { useEffect } from 'react';
import { AddTodo, TodoList, Stats } from './components';
import { useTodos } from './hooks/useTodos';
import { APP_CONFIG } from './constants';
import './App.css';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted, stats, error } = useTodos();

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
        </header>

        <main className="app-main">
          {error && (
            <div className="error-banner" role="alert">
              {error}
            </div>
          )}
          
          <AddTodo onAdd={addTodo} />
          
          <Stats 
            total={stats.total}
            completed={stats.completed}
            remaining={stats.remaining}
            onClearCompleted={clearCompleted}
          />

          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </main>
      </div>
    </div>
  );
}

export default App;