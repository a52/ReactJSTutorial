import { memo } from "react";

const Todos = ({todos}) => {
    console.log("Child render");
    return (
        <div>
            <h2>My Todos</h2>
            
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </div>
    );
};

export default memo(Todos);