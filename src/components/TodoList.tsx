import React, { memo } from 'react';
import { TodoListProps } from '../types/components';
import TodoItem from './TodoItem';

const TodoList: React.FC<TodoListProps> = memo(({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <h3>No todos yet!</h3>
        <p>Add your first todo above to get started.</p>
      </div>
    );
  }

  return (
    <div className="todo-list" role="list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
});

TodoList.displayName = 'TodoList';

export default TodoList;
