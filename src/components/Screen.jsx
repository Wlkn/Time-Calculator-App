import React from "react";
import useFitText from "use-fit-text";
import "./Screen.css";

function Screen({ value }) {
    const { fontSize, ref } = useFitText({ minFontSize: 100 });

    return (
        <div
            className="screen"
            ref={ref}
            style={{ fontSize, height: 100, border: "1px solid #ccc" }}
        >
            {value}
        </div>
    );
}

export default Screen;
