import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppExercise7.css";

export default class AppExercise7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            form: { name: "", phone: "", email: "" },
            isValid: false,
            indexSelected: -1,
        };
    }

    handleChange = (event) => {
        this.setState(
            (state) => {
                const form = { ...state.form };
                form[event.target.name] = event.target.value;
                return { form };
            },
            () => this.checkInvalidForm()
        );
    };

    checkInvalidForm = () => {
        const { name, phone, email } = this.state.form;
        const value =
            name.trim() !== "" &&
            phone.trim() !== "" &&
            email.trim() !== "" &&
            /^[0-9]+$/.test(phone);
        this.setState({
            isValid: value,
        });
    };

    handleSubmit = () => {
        if (this.state.isValid) {
            const newList = [...this.state.studentList];
            if (this.state.indexSelected > -1) {
                newList.splice(this.state.indexSelected, 1, this.state.form);
            } else {
                newList.push(this.state.form);
            }

            this.setState({
                studentList: newList,
                form: { name: "", phone: "", email: "" },
                isValid: false,
                indexSelected: -1,
            });
        } else {
            alert("Vui lòng nhập đầy đủ và đúng định dạng thông tin!");
        }
    };

    handleSelect = (studentSelected, index) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: index,
        });
    };

    handleDelete = (index) => {
        if (window.confirm("Bạn có chắc muốn xóa sinh viên này không?")) {
            const newList = [...this.state.studentList];
            newList.splice(index, 1);
            this.setState({ studentList: newList });
        }
    };

    render() {
        const { studentList, form, indexSelected } = this.state;

        return (
            <div className="container mt-5">
                <div className="card shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
                    <div className="card-body">
                        <h2 className="text-center mb-4 fw-bold">Student List</h2>

                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input
                                name="name"
                                className="form-control"
                                value={form.name}
                                onChange={this.handleChange}
                                placeholder="Nhập tên..."
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone:</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                value={form.phone}
                                onChange={this.handleChange}
                                placeholder="Chỉ nhập số..."
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input
                                name="email"
                                className="form-control"
                                value={form.email}
                                onChange={this.handleChange}
                                placeholder="Nhập email..."
                            />
                        </div>

                        <div className="text-center">
                            <button
                                className={`btn ${indexSelected > -1 ? "btn-success" : "btn-primary"} w-100`}
                                onClick={this.handleSubmit}
                            >
                                {indexSelected > -1 ? "Update" : "Submit"}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <table className="table table-bordered table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th style={{ width: "150px" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentList.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center text-muted">
                                        Chưa có sinh viên nào
                                    </td>
                                </tr>
                            ) : (
                                studentList.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.phone}</td>
                                        <td>{student.email}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-warning me-2"
                                                onClick={() => this.handleSelect(student, index)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => this.handleDelete(index)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}