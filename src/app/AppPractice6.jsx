import { useState } from "react";
import Hello from "../components/Hello";
import Home from "../components/Home";

function AppPractice6() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogIn = () => {
        setIsLoggedIn(true);
    };

    const handleLogOut = () => {
        setIsLoggedIn(false);
    };

    return (
        <div style={{textAlign: "center"}}>
            {isLoggedIn ? (
                <Home onLogOut={handleLogOut} />
            ) : (
                <div>
                    <h1>Please Log In</h1>
                    <button onClick={handleLogIn}>Log In</button>
                </div>
            )}
        </div>
    );
}

export default AppPractice6;