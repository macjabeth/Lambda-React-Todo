import React from 'react';

const TodoForm = (props) => {
  return (
    <form>
      <input
        type="text"
        value={props.todoInput}
        name="todoInput"
        onChange={props.handleChanges}
        placeholder="Enter Task"
      />
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.clearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
