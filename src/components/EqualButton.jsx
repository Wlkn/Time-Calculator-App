import Button from "./Button";
import {evalBigTimeEquation} from "./utils/utils";

export default function EqualButton({setScreenState, setLastUsedBtnState}) {
    return (
        <Button
            className="equal-btn"
            value={"="}
            key={"="}
            onClick={() => {
                setLastUsedBtnState("E");
                setScreenState(state => {
                    return evalBigTimeEquation(state)
                });
            }}
        ></Button>
    );
}
