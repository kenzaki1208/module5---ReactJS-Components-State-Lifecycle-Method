import { useState } from "react";
import Hello from "../components/Hello";

function AppPractice5() {
    const [showHello, setShowHello] = useState(true);

    return (
        <div style={{textAlign: "center", marginTop: 50}}>
            {showHello && <Hello />}
            <button onClick={() => setShowHello(false)}>Delete the component</button>
        </div>
    );
}

export default AppPractice5;