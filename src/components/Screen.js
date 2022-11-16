import React from "react";
import useFitText from "use-fit-text";
import "./Screen.css";

function Screen({ value }) {
    const { fontSize, ref } = useFitText();

    return (
        <div ref={ref} style={{ fontSize, minFontSize: 500 }}>
            {value}
        </div>
    );
}

export default Screen;
