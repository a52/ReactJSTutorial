import { useState } from "react";
import { ReactDOM } from "react-dom";
import Todos from "./Todos";


const Home = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["Task 1", "Task 2"]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <>
            <Todos todos={todos} />
            <hr/>
            <div>
                Count: {count}
                <button onClick={increment}>+</button>

            </div>
        </>
        
    );
};

export default Home;