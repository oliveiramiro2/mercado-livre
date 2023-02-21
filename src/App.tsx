import { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="h-screen flex flex-col items-center justify-around">
            <h1>Vite + React</h1>
            <div className="">
                <button type="button" onClick={() => setCount(count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="">Click on the Vite and React logos to learn more</p>
        </div>
    );
};

export default App;
