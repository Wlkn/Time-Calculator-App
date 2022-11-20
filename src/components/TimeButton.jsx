import Button from "./Button";

import {
    convertSecondsToHHMMSS,
    convertMinutesToHHMMSS,
    convertHoursToHHMMSS,
} from "./utils/utils";

export default function TimeButton({ value, setScreenState, setLastUsedBtnState }) {
    const convertLastEquationMember = equationString => {
        let splittedEquation = equationString.split(" ");
        let lastEquationMember = splittedEquation.pop();
        switch (value) {
            case "H":
                return [...splittedEquation, convertHoursToHHMMSS(lastEquationMember)].join(" ");
                break;
            case "M":
                return  [...splittedEquation, convertMinutesToHHMMSS(lastEquationMember)].join(" ");
                break;
            case "S":
                return  [...splittedEquation, convertSecondsToHHMMSS(lastEquationMember)].join(" ");
                break;
            default:
                break;
        }
    };

    return (
        <Button
            className="time-btn"
            value={value}
            key={value}
            onClick={() => {
                setLastUsedBtnState(lastUsedBtnState => {
                    setScreenState(
                        state =>
                            convertLastEquationMember(
                                lastUsedBtnState === "O"
                                    ? state.substring(0, state.length - 3)
                                    : state
                            )
                    );
                    return "T";
                });
            }}
        ></Button>
    );
}
