import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import SimpleStorage from 'react-simple-storage';

import './App.css';

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

  constructor() {
    super();
    this.state = {
      todos: todos,
      todoInput: ''
    }
  };

  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      task: this.state.todoInput,
      id: Date.now(),
      completed: false
    }

    const todos = [...this.state.todos, newTodo];

    this.setState({ todos, todoInput: '' });
  };

  toggleComplete = (e, id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => todo.id === id ? {
        ...todo, completed: !todo.completed
      } : todo)
    })
  }

  clearTodos = (e) => {
    e.preventDefault();

    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  }

  render() {
    return (
      <React.Fragment>
        <SimpleStorage parent={this} />
        <div className="app-container">
          <h1>todos</h1>
          <TodoForm
            todoInput={this.state.todoInput}
            handleChanges={this.handleChanges}
            addTodo={this.addTodo}
            clearTodos={this.clearTodos}
          />
          <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
