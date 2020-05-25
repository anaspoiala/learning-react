import React from "react";

const userInput = (props) => {
    const style = {
        border: "1px solid black"
    };

    return (
        <div>
            <input 
                type="text" 
                onChange={props.changed} 
                value={props.currentInput} 
                style={style}
            />
        </div>
    );
}

export default userInput;