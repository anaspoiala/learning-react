import React from "react";
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p>Some text...</p>
            <p>Username: {props.username}</p>
        </div>
    );
}

export default userOutput;