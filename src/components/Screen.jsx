import React from "react";
import "./Screen.css";

function Screen({ value, onClick }) {

    return (
        <div
            className="screen"
            style={{ fontSize: "calc(5vh + 5vw) ", border: "1px solid #ccc" }}
            onClick={onClick}
        >
            {value}
        </div>
    );
}

export default Screen;
