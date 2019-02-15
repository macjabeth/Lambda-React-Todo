import React from 'react';

import './Todo.css';

const TodoForm = props => {
  const placeholder = props.searching ? 'Filter...' : 'What needs to be done?';
  const searchClassList = ['fas fa-search', ...(props.searching ? ['enabled'] : [])];

  return (
    <form className="todo-form" onSubmit={props.handleSubmit}>
      <div className="form-wrapper">
        <input
          type="text"
          value={props.todoInput}
          name="todoInput"
          onChange={props.handleChanges}
          placeholder={placeholder}
          autoComplete="off"
          required
        />
        <i
          className={searchClassList.join(' ')}
          onClick={props.toggleSearch}
          title="Filter Results"
        />
        <i className="far fa-trash-alt" onClick={props.clearTodos} title="Clear Completed Tasks" />
      </div>
    </form>
  );
};

export default TodoForm;
