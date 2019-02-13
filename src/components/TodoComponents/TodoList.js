import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (
  <ul className="todo-list">
    {props.todos.map((todoItem, index) => (
      <Todo key={index} task={todoItem.task} />
    ))}
  </ul>
);

export default TodoList;
