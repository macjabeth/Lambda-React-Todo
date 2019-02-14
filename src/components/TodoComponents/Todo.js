import React from "react";

import "./Todo.css";

function Todo(props) {
  const classList = ["todo-item"];

  if (props.completed) classList.push("completed");

  return (
    <li className={classList.join(" ")} onClick={e => props.toggleComplete(e, props.id)} >
      {props.task}
    </li>
  );
}

export default Todo;
