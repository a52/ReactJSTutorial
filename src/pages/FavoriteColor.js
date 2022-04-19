import React, { useState } from "react";    

function FavoriteColor(){
    const [color, setColor] = useState("red");

    return (
        <>
            <h2>Favorite Color is <span style={{color: color }}>{color}</span></h2>
            <button onClick={() => setColor("red")}>Red</button>
            <button onClick={() => setColor("green")}>Green</button>
            <button onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setColor("yellow")}>Yellow</button>
            <button onClick={() => setColor("orange")}>Orange</button>
            <button onClick={() => setColor("purple")}>Purple</button>
            <button onClick={() => setColor("pink")}>Pink</button>
            
        </>
    );
}

export default FavoriteColor;