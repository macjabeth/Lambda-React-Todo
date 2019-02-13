import React from 'react';

const TodoForm = (props) => {
  return (
    <form onSubmit={props.addTodo}>
      <input
        type="text"
        value={props.todoInput}
        name="todoInput"
        onChange={props.handleChanges}
        placeholder="Enter Task"
        autoComplete="off"
        required
      />
      <button>Add Todo</button>
      <button onClick={props.clearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
