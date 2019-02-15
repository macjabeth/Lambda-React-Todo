import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import SimpleStorage from 'react-simple-storage';

import './minireset.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoInput: '',
      searching: false,
      todos: [
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
      ]
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searching) return;

    this.setState(state => ({
      todoInput: '',
      todos: [
        ...state.todos,
        {
          task: state.todoInput,
          id: Date.now(),
          completed: false
        }
      ]
    }));
  };

  editTodo = (e, id, task) => {
    e.preventDefault();

    this.setState(state => ({
      todos: state.todos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              task
            }
          : todo
      )
    }));
  };

  toggleComplete = (id, editing) => {
    if (editing) return;
    this.setState(state => ({
      todos: state.todos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )
    }));
  };

  clearTodos = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.completed)
    }));
  };

  toggleSearch = () => {
    this.setState(state => ({
      searching: !state.searching
    }));
  };

  render() {
    return (
      <React.Fragment>
        <SimpleStorage parent={this} />
        <div className="app-container">
          <h1>todos</h1>
          <TodoForm
            todoInput={this.state.todoInput}
            handleChanges={this.handleChanges}
            handleSubmit={this.handleSubmit}
            clearTodos={this.clearTodos}
            toggleSearch={this.toggleSearch}
            searching={this.state.searching}
          />
          <TodoList
            todos={this.state.todos}
            editTodo={this.editTodo}
            toggleComplete={this.toggleComplete}
            searching={this.state.searching}
            todoInput={this.state.todoInput}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
