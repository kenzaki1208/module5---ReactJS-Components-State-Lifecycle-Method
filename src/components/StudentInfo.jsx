import React from "react";
import { Component } from "react";

class StudentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                { id: 1, name: "Nguyễn Văn A", age: 30, address: "Hà Nội" },
                { id: 2, name: "Trần Thị B", age: 22, address: "Đà Nẵng" },
                { id: 3, name: "Lê Văn C", age: 25, address: "TP. Hồ Chí Minh" },
            ],
        };
    }

    render() {
        return (
            <div style={{margin: "20px"}}>
                <h3>Danh sách sinh viên</h3>
                <table border={1} cellPadding={5} cellSpacing={0}>
                    <thead>
                        <tr style={{backgroundColor: "#f0f0f0"}}>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentInfo;