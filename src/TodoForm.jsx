import { Component } from "react";
import './TodoForm.css';


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {inputText: ''};
    }

    handleChange = (event) => {
        this.setState({inputText: event.target.value});
    }

    handleSubmit = (e) => {
        // 阻止表單的預設提交行為（頁面重新整理）
        e.preventDefault();

        // 檢查輸入框的值是否為空或僅包含空格。trim() 方法用於移除字串兩端的空格。
        if (this.state.inputText.trim()) {
            this.props.addTodo(this.state.inputText);
            this.setState({inputText: ''});
        }
    }

    render() {
        let inputtext = this.state.inputText;
        return (
            <div className="form1">
                <form action="" className="todo-Form" onSubmit={this.handleSubmit}>
                    <input type="text" value={inputtext} className="todo-form__input" onChange={this.handleChange} />
                    <button type="submit" className="todo-form__button">確定</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;