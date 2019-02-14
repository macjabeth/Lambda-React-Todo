import React from 'react';

import './Todo.css';

function Todo(props) {
  return (
    <li className={`todo-item${props.completed ? " completed" : ""}`} onClick={(e) => props.toggleComplete(e, props.id)}>{props.task}</li>
  );
}

export default Todo;
