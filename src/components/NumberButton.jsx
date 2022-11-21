import Button from "./Button";

export default function NumberButton({ value, setScreenState, setLastUsedBtnState }) {
    return (
        <Button
            className={["number-btn", value === 0 ? "zero-btn" : ""].join(" ")}
            value={value}
            key={value}
            onClick={() => {
                setScreenState(state => {
                    state = String(state);
                    let pointAlreadyUsed = state.includes(".");

                    if (!pointAlreadyUsed && value === ".") return String(state + value);
                    if (state === "0" && value !== ".") return String(value);

                    let lastEquationMember = state.split(" ").slice(-1)[0];
                    let lastEquationIsTime = lastEquationMember.includes(":");
                    lastEquationMember += value;

                    if (lastEquationIsTime) {
                        let needToShift = lastEquationMember.split(":").slice(-1)[0].length > 2;
                        if (needToShift) {
                            let positionOfFirstCollon = lastEquationMember.indexOf(":");
                            if (lastEquationMember[positionOfFirstCollon + 1] === "0") {
                                lastEquationMember =
                                    lastEquationMember.slice(0, positionOfFirstCollon + 1) +
                                    lastEquationMember.slice(positionOfFirstCollon + 2);

                                // shift last collon is in form hh:mm:ss
                                if (lastEquationMember.split(":").length === 3) {
                                    let positionOfLastCollon = lastEquationMember.lastIndexOf(":");
                                    lastEquationMember =
                                        lastEquationMember.slice(0, positionOfLastCollon) +
                                        lastEquationMember.charAt(positionOfLastCollon + 1) +
                                        ":" +
                                        lastEquationMember.slice(positionOfLastCollon + 2);
                                }
                            } else {
                                lastEquationMember = state.split(" ").slice(-1)[0];
                            }
                        }
                    }
                    let fullJoinedState = (
                        state.split(" ").slice(0, -1).join(" ") +
                        " " +
                        lastEquationMember
                    ).trim();

                    return fullJoinedState;
                });

                setLastUsedBtnState("N");
            }}
        ></Button>
    );
}
