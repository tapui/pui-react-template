import React from 'react';
import './TodoItem.css'; // Import the CSS file

function TodoItem({ todo, todos, setTodos }) {
  const toggleCompletion = () => {
    const newTodos = todos.map(t => 
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    setTodos(newTodos);
  };

  const deleteTodo = () => {
    const newTodos = todos.filter(t => t.id !== todo.id);
    setTodos(newTodos);
  };

  return (
    <div className="todo-item">
      <li className={todo.completed ? 'completed' : ''}>
        {todo.text}
        <div className="todoActions">
          <button onClick={toggleCompletion}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={deleteTodo}>Delete</button>
        </div>
      </li>
    </div>
  );
}

export default TodoItem;
