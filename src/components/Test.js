import React, { useState } from "react";

export default function Test() {
    const [color, setColor] = useState("blue");
    
    function colorChange() {
        setColor("purple");
    }

    function pinkChange() {
        setColor("pink");
    }

    return(
        <main>
        <h1 style={{ color }}>Testing Testing</h1>
        <button onClick={colorChange}>Purple</button>
        <button id="button" onClick={pinkChange}>Pink</button>
        </main>
    )
}