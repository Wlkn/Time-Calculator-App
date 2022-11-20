import Button from "./Button";

export default function NumberButton({ value, setScreenState, setLastUsedBtnState }) {
    return (
        <Button
            className={["number-btn", value === 0 ? "zero-btn" : ""].join(" ")}
            value={value}
            key={value}
            onClick={() => {
                setLastUsedBtnState("N");

                setScreenState(state => {
                    if (state[state.length - 1] === "0") {
                        return state.slice(0, state.length - 1) + value;
                    } else if (state[state.length - 2] === "0") {
                        return state.slice(0, state.length - 2) + state[state.length - 1] + value;
                    } else if (state[state.length - 3] === ":" && state[state.length - 4] === "0") {
                        return (
                            state.slice(0, state.length - 4) +
                            state[state.length - 2] +
                            ":" +
                            state[state.length - 1] +
                            value
                        );
                    } else if (state[state.length - 3] === ":" && state[state.length - 5] === "0") {
                        return (
                            state.slice(0, state.length - 5) +
                            state[state.length - 4] +
                            state[state.length - 2] +
                            ":" +
                            state[state.length - 1] +
                            value
                        );
                    } else {
                        let pointAlreadyUsed = state.includes(".");
                        return (!pointAlreadyUsed && value === ".") || value !== "."
                            ? state + value
                            : state;
                    }
                });
            }}
        ></Button>
    );
}
