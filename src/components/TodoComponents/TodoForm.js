import React from 'react';

import './Todo.css';

const TodoForm = (props) => {
  return (
    <form className="todo-form" onSubmit={props.addTodo}>
      <div className="form-wrapper">
        <input
          type="text"
          value={props.todoInput}
          name="todoInput"
          onChange={props.handleChanges}
          placeholder="What needs to be done?"
          autoComplete="off"
          required
        />
        <i className="far fa-trash-alt" onClick={props.clearTodos}></i>
      </div>
    </form>
  );
};

export default TodoForm;
