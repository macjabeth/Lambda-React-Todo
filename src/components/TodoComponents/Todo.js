import React from "react";

import "./Todo.css";

function Todo(props) {
  const classList = ["todo-item"];

  if (props.completed) classList.push("completed");

  return (
    <li className={classList.join(" ")} onClick={() => props.toggleComplete(props.id)} >
      {props.task}
    </li>
  );
}

export default Todo;
