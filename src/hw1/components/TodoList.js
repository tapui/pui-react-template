import React, { useState } from 'react';
import './TodoList.css'; // Import the CSS file
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos, filter }) {
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            const newTodo = {
                id: Date.now(),
                text: input,
                completed: false
            };
            setTodos([...todos, newTodo]);
            setInput('');  // clear input after adding
        }
    };

    let filteredTodos = todos;
    if (filter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    } else if (filter === "incomplete") {
        filteredTodos = todos.filter(todo => !todo.completed);
    }

    return (
        <div className="todoListContainer">
        <div className="inputWrapper">
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
        </div>
        <ul>
            {filteredTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
            ))}
        </ul>
        </div>
    );
}

export default TodoList;
