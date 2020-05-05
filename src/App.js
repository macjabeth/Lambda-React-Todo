import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function getTodos() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

class App extends React.Component {
  state = {
    todos: getTodos(),
    newTodo: ''
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    // update localStorage if we add or remove any todos
    if (this.state.todos.length !== prevState.todos.length) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      task: this.state.newTodo,
      completed: false
    };

    this.setState(state => ({
      todos: [...state.todos, newTodo],
      newTodo: ''
    }));
  };

  handleChange = ({ target: { value } }) => {
    this.setState(state => ({ ...state, newTodo: value }));
  };

  toggleTodo = (id) => {
    const newTodos = this.state.todos.filter(
      todo => todo.id === id
        ? Object.assign(todo, { completed: !todo.completed })
        : todo
    );

    this.setState(state => ({
      ...state,
      todos: newTodos
    }), () => {
      // update localStorage after toggling a todo
      localStorage.setItem('todos', JSON.stringify(newTodos));
    });
  };

  clearCompleted = () => {
    this.setState(state => ({
      ...state,
      todos: state.todos.filter(todo => !todo.completed)
    }));
  };

  render() {
    const { todos, newTodo } = this.state;

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={todos} toggleTodo={this.toggleTodo} />
        <TodoForm
          newTodo={newTodo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
