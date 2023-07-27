import React, { useState } from 'react';
import TodoList from './TodoList';

const Parent = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy the React app', completed: false },
  ]);

  const handleCompleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} onCompleteTodo={handleCompleteTodo} />
    </div>
  );
};

export default Parent;
