import { useContext } from "react";
import { CalcContext } from "./CalculatorContext";
import Button from "./Button";

export default function NumberButton({ value }) {
const { calc, setCalc } = useContext(CalcContext);
    return (
        <Button
            className={["number-btn", value === 0 ? "zero-btn" : ""].join(" ")}
            value={value}
            key={value}
            onClick={() => {
                
                if (value === ".") {
                    setCalc({
                        ...calc,
                        num: 28,
                    });
                }
                console.log(value);
            }}
        ></Button>
    );
}
