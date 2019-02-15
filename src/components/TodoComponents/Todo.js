import React from 'react';

import './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
      editing: false,
      todoInput: ''
    };
  }

  handleMouseEnter = () => {
    this.setState({ hovering: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovering: false });
  };

  handleChange = e => {
    this.setState({ todoInput: e.target.value });
  };

  toggleEdit = (e, task) => {
    e.stopPropagation();
    this.setState(
      state => ({
        editing: !state.editing,
        todoInput: task
      }),
      () => {
        this.refs.todoInput.focus();
      }
    );
  };

  render() {
    const todoClassList = ['todo-item', ...(this.props.completed ? ['completed'] : [])];
    const editClassList = ['far fa-edit', ...(this.state.hovering ? ['display'] : [])];

    return (
      <li
        className={todoClassList.join(' ')}
        onClick={() => this.props.toggleComplete(this.props.id, this.state.editing)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {!this.state.editing ? (
          this.props.task
        ) : (
          <form
            onSubmit={e => {
              this.props.editTodo(e, this.props.id, this.state.todoInput);
              this.setState({ editing: false });
            }}
          >
            <input value={this.state.todoInput} onChange={this.handleChange} ref="todoInput" />
          </form>
        )}
        <i className={editClassList.join(' ')} onClick={e => this.toggleEdit(e, this.props.task)} />
      </li>
    );
  }
}

export default Todo;
