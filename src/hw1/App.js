import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import mockData from './data/mockData';

function App1() {
  const [todos, setTodos] = useState(mockData);
  const [filter, setFilter] = useState('all');

  return (
    <div className="todoApp">
      <h1>Todo App</h1>
      <TodoFilters setFilter={setFilter} />
      <TodoList todos={todos} setTodos={setTodos} filter={filter} />
    </div>
  );
}

export default App1;
