import React from 'react';
import './App.css';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  state = {
    todos: []
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [...state.todos, todo]
    }));
  };

  toggleTodo = id => {
    this.setState(state => ({
      todos: state.todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    }));
  };

  deleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  render() {
    return (
      <div className='app'>
        <h2>Your Todos</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
