import { Component } from "react";
import TodoItem from "./TodoItem";
import './TodoList.css';

class TodoList extends Component {
    render() {
        const {todos, deleteTodo, toggleTodo, editTodo} = this.props;
        return (
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        index={index}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                ))}
            </ul>
        );
    }
}

export default TodoList;