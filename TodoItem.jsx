// TodoItem.js
import React from 'react';

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <li className={todo.completed ? 'todo-item completed' : 'todo-item'}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
