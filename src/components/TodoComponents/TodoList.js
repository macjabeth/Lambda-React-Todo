import React from 'react';
import Todo from './Todo';

import './Todo.css';

const TodoList = (props) => (
  <ul className="todo-list">
    {props.todos.map((todoItem, index) => (
      ((props.searching && todoItem.task.includes(props.todoInput)) || !props.searching)
        ? <Todo
            key={index}
            id={todoItem.id}
            task={todoItem.task}
            completed={todoItem.completed}
            toggleComplete={props.toggleComplete}
          />
        : null
    ))}
  </ul>
);

export default TodoList;
