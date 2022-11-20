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
                    if (state === "0") {
                        return value.toString();
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
