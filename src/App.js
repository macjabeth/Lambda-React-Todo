import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import SimpleStorage from "react-simple-storage";

import "./minireset.css";
import "./App.css";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      todoInput: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();

    this.setState(state => ({
      todos: [...state.todos, {
        task: state.todoInput,
        id: Date.now(),
        completed: false
      }],
      todoInput: ""
    }));
  };

  toggleComplete = (e, id) => {
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

  clearTodos = e => {
    e.preventDefault();

    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.completed)
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
            addTodo={this.addTodo}
            clearTodos={this.clearTodos}
          />
          <TodoList
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
