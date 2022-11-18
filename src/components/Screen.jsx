import React, { useContext } from "react";
import useFitText from "use-fit-text";
import { CalcContext } from "./CalculatorContext";
import "./Screen.css";

function Screen({ value }) {
    const { fontSize, ref } = useFitText({ minFontSize: 100 });
    const { calc } = useContext(CalcContext)

    return (
        <div
            className="screen"
            ref={ref}
            style={{ fontSize, height: 100, border: "1px solid #ccc" }}
        >
            {calc.num ? calc.num : calc.res}
        </div>
    );
}

export default Screen;
