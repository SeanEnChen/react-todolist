import { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        this.state = { todos: savedTodos };
    }

    componentDidUpdate() {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    addTodo = (text) => {
        const newTodo = { text, completed: false };
        const updatedTodos = [...this.state.todos, newTodo];
        this.setState({ todos: updatedTodos });
    };

    deleteTodo = (index) => {
      const newTodos = [...this.state.todos];
      newTodos.splice(index, 1);
      this.setState({ todos: newTodos });
    };

    toggleTodo = (index) => {
      const newTodos = [...this.state.todos];
      newTodos[index].completed = !newTodos[index].completed;
      this.setState({ todos: newTodos });
    };

    editTodo = (index, newText) => {
      const newTodos = [...this.state.todos];
      newTodos[index].text = newText;
      this.setState({ todos: newTodos });
    };

    render() {
      const { todos } = this.state;
        return (
            <div className="todo-app">
                <h1 className='todo-app__title'>Todo List</h1>
                <div className="main1">
                  <TodoForm addTodo={this.addTodo} />
                  <TodoList
                      todos={todos}
                      deleteTodo={this.deleteTodo}
                      toggleTodo={this.toggleTodo}
                      editTodo={this.editTodo}
                  />
                </div>
            </div>
        );
    }
}

export default App;
