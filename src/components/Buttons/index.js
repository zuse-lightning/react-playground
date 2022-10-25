import React from "react";
import "./style.css";

const Buttons = (props) => {

    const { add, remove} = props;
    
    return (
        <div id="buttons-container">
            <button onClick={add} id="add">Add</button>
            <button onClick={remove} id="remove">Remove</button>
        </div>
    );
}

export default Buttons;