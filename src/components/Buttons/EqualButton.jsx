import Button from "./Button";
import { evalBigTimeEquation } from "../../utils/utils";

export default function EqualButton({ setScreenState, setLastUsedBtnState }) {
    return (
        <Button
            className="equal-btn"
            value={"="}
            key={"="}
            onClick={() => {
                setLastUsedBtnState(lastUsedBtnState => {
                    if (lastUsedBtnState !== "O") {
                        setScreenState(state => {
                            return evalBigTimeEquation("" + state);
                        });
                        return "E";
                    }
                    return lastUsedBtnState;
                });
            }}
        ></Button>
    );
}
