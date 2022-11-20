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

            case "M":
                return [...splittedEquation, convertMinutesToHHMMSS(lastEquationMember)].join(" ");

            case "S":
                return [...splittedEquation, convertSecondsToHHMMSS(lastEquationMember)].join(" ");

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
                    if (lastUsedBtnState === "N") {
                        setScreenState(state =>
                            convertLastEquationMember(
                                lastUsedBtnState === "O"
                                    ? state.substring(0, state.length - 3)
                                    : state
                            )
                        );
                    }

                    return "T";
                });
            }}
        ></Button>
    );
}
