import React from 'react';
import * as PropTypes from 'prop-types';
import { Transition } from 'react-spring/renderprops';

import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    const { todos, toggleTodo, deleteTodo } = this.props;
    return (
      <ul className='todo-list'>
        <Transition
          items={todos} keys={item => item.id}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}>
          {item => item && (props => <Todo style={props} todo={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)}
        </Transition>
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoList;