import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Todo.css';

const cx = classNames.bind(styles);

class Todo extends React.Component {
  render() {
    const { style, todo, toggleTodo, deleteTodo } = this.props;
    const { id, task, completed } = todo;
    const classes = cx('todo-item', { completed });
    return (
      <li
        style={style}
        className={classes}>
        <span onClick={() => toggleTodo(id)}>{task}</span>
        <span onClick={() => deleteTodo(id)}>&times;</span>
      </li>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }),
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default Todo;