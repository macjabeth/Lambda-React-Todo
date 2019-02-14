import React from 'react';

import './Todo.css';

const TodoForm = (props) => {
  return (
    <form className="todo-form" onSubmit={props.addTodo}>
      <input
        type="text"
        value={props.todoInput}
        name="todoInput"
        onChange={props.handleChanges}
        placeholder="Enter Task"
        autoComplete="off"
        required
      />
      <br />
      <button>Add Todo</button>
      <button onClick={props.clearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
