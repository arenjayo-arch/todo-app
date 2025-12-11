import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, onToggleTodo, onEditTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-icon">📪</p>
        <p>No tasks yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
