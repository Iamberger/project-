// Todo.js
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './actions';


function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [input, setInput] = useState('');

  function handleSubmit() {
    dispatch(addTodo(input));
    setInput('');
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input type="text" value={input} onChange={handleChange} />
        <button type="button" onClick={handleSubmit}>
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
