import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './app.css';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todos: todos,
      todoInput: ''
    }
  };

  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      task: this.state.todoInput,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo],
      todoInput: ''
    });
  };

  clearTodos = (e) => {
    e.preventDefault();

    this.setState({
      todos: []
    });
  }

  render() {
    return (
      <div className="app-container">
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm
          todoInput={this.state.todoInput}
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
          clearTodos={this.clearTodos}
        />
      </div>
    );
  }
}

export default App;
