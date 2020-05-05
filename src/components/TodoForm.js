import React, { Component } from 'react';

export default class TodoForm extends Component {
  render() {
    const { newTodo, handleChange, handleSubmit, clearCompleted } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleChange} required />
        <button type='submit'>Add Todo</button>
        <button type='button' onClick={clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}