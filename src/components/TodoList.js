// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    const { todos, toggleTodo } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    );
  }
}