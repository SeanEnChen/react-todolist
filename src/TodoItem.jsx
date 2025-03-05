import { Component } from "react";
// import TodoList from "./TodoList";
import './TodoItem.css';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {isEditing: false, editText: this.props.todo.text};
    }

    handleEditChange = (event) => {
        this.setState({editText: event.target.value});
    }

    handleEditSave = (event) => {
        this.props.editTodo(this.props.index, this.state.editText);
        this.setState({isEditing: false});
    }

    render() {
        const {todo, index, deleteTodo, toggleTodo} = this.props;
        const {isEditing, editText} = this.state;
        const {text, completed} = todo;
        return (
            <li className={`todo-item ${completed ? 'todo-item_completed' : ''}`}>
                {isEditing ? (
                    <div>
                        <input type="text" 
                        value={editText}
                        onChange={this.handleEditChange}
                        className="todo-item__edit-input"
                        />
                        <button className="todo-item__save-btn" onClick={this.handleEditSave}>Save</button>
                    </div>
                ) : (
                    <div>
                        <span className="todo-item__text" onClick={()=>toggleTodo(index)}>{text}</span>
                        <button onClick={()=>this.setState({isEditing:true})} className="todo-item__edit-btn">Edit</button>
                        <button onClick={() => deleteTodo(index)} className="todo-item__delete">Delete</button>
                    </div>
                )
                }
            </li>
        );
    }
}

export default TodoItem;