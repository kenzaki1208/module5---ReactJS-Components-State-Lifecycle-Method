import React from "react";
import Alert from "../components/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

function AppExercise1() {
    return (
        <div className="container mt-3">
            <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
        </div>
    );
}

export default AppExercise1;