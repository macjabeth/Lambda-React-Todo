import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './Todo.css';

export default class Todo extends PureComponent {
  render() {
    const { id, task, completed, toggleTodo } = this.props;
    return (
      <li
        onClick={toggleTodo.bind(null, id)}
        className={classNames({ completed })}
      >
        {task}
      </li>
    );
  }
}