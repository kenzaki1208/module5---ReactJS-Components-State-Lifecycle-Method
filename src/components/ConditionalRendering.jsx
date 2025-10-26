import React from "react";
import { Component } from "react";

class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false,
        };
    }

    handleToggle = () => {
        this.setState({
            isExpand: !this.state.isExpand,
        });
    };

    render() {
        return (
            <div style={{fontFamily: "Arial, sans-serif"}}>
                <div style={{ backgroundColor: "green", color: "white", padding: "20px" }}>
                    <h1>Conditional Rendering</h1>
                </div>

                {this.state.isExpand ? (
                    <div style={{margin: "10px"}}>
                        <button onClick={this.handleToggle}>Đóng gói giới thiệu</button>
                        <h3>Giới thiệu</h3>
                        <p>
                            Trong ReactJs, đôi khi bạn có một số component và tùy thuộc vào
                            từng điều kiện ví dụ như trạng thái của state, props,… mà bạn muốn
                            hiển thị một hoặc một số component nào đó. Khi đó bạn có thể sử
                            dụng Conditional rendering để render ra component mà bạn mong
                            muốn.
                        </p>
                    </div>
                ) : (
                    <div style={{margin: "10px"}}>
                        <button onClick={this.handleToggle}>Xem giới thiệu</button>
                    </div>
                )}
            </div>
        );
    }
}

export default ConditionalRendering;