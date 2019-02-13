import React from 'react';

function Todo(props) {
  return (
    <li className="todo-item">{props.task}</li>
  );
}

export default Todo;
