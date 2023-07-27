import React from 'react';

const TodoList = ({ todos, onCompleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.completed ? '' : 'none' }}>
            {todo.text}
          </span>
          {!todo.completed && (
            <button onClick={() => onCompleteTodo(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
