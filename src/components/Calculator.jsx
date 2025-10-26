import React from "react";
import { useState } from "react";

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const handleAdd = () => setResult(parseInt(num1) + parseInt(num2));
    const handleSubtract = () => setResult(parseInt(num1) - parseInt(num2));
    const handleMultiply = () => setResult(parseInt(num1) * parseInt(num2));
    const handleDivide = () => {
        if (parseInt(num2) === 0) {
            setResult("Error: Division by zero");
        } else {
            setResult(parseInt(num1) / parseInt(num2));
        }
    };

    return (
        <div style={{border: "1px solid black", width: "250px", padding: "10px"}}>
            <div>
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}/>
            </div>
            <div>
                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}/>
            </div>
            <h4>Result: {result}</h4>
            <div>
                <button onClick={handleAdd}>+</button>
                <button onClick={handleSubtract}>-</button>
                <button onClick={handleMultiply}>*</button>
                <button onClick={handleDivide}>/</button>
            </div>
        </div>
    );
}

export default Calculator;