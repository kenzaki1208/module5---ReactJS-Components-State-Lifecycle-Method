import React from "react";

function Alert({text}) {
    if (typeof text !== 'string' || text.length === 0) {
        console.error('Invalid prop: text must be a non-empty string');
        return null;
    }

    return (
        <div className="" role="alert">
            {text}
        </div>
    );
}

export default Alert;