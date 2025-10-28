import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AppExercise6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            item: event.target.value,
        });
    };

    handleAddItem = () => {
        const { item, list } = this.state;
        if (item.trim() !== "") {
            this.setState({
                list: [...list, { text: item, completed: false }],
                item: "",
            });
        }
    };

    handleToggle = (index) => {
        const newList = [...this.state.list];
        newList[index].completed = !newList[index].completed;
        this.setState({ list: newList });
    };

    render() {
        return (
            <div className="container mt-5">
                <div className="card shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
                    <div className="card-body text-center">
                        <h2 className="mb-4 fw-bold">Todo List</h2>

                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập công việc..."
                                value={this.state.item}
                                onChange={this.handleChange}
                            />
                            <button
                                className="btn btn-primary"
                                onClick={this.handleAddItem}
                            >
                                Add
                            </button>
                        </div>

                        <ul className="list-group text-start">
                            {this.state.list.map((todo, index) => (
                                <li
                                    key={index}
                                    className="list-group-item d-flex align-items-center"
                                >
                                    <input
                                        type="checkbox"
                                        className="form-check-input me-2"
                                        checked={todo.completed}
                                        onChange={() => this.handleToggle(index)}
                                    />
                                    <span
                                        style={{
                                            textDecoration: todo.completed ? "line-through" : "none",
                                            color: todo.completed ? "gray" : "black",
                                        }}
                                    >
                                        {todo.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}