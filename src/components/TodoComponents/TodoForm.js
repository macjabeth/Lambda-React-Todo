import React from 'react';

import './Todo.css';

const TodoForm = (props) => {
  const searchClassList = ['fas fa-search'];

  if (props.searching) searchClassList.push('enabled');

  return (
    <form className="todo-form" onSubmit={props.handleSubmit}>
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
        <i className={searchClassList.join(' ')} onClick={props.toggleSearch}></i>
        <i className="far fa-trash-alt" onClick={props.clearTodos} title="Clear Completed Tasks"></i>
      </div>
    </form>
  );
};

export default TodoForm;
