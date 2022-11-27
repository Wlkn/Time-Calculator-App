import Button from "./Button";

export default function RemoveButton({ setScreenState, setLastUsedBtnState }) {
    return (
        <Button
            className="Remove-btn"
            value={"←"}
            key={"←"}
            onClick={() => {
                setLastUsedBtnState("R");
                setScreenState((state) => {
                    let removeDigitNumber = state.substring(
                        0,
                        state.length - 1
                    );
                    let removeDigitOperator = state.substring(
                        0,
                        state.length - 3
                    );
                    if (state.slice(-1) === " ") {
                        console.log(`state: ${state}`);
                        return removeDigitOperator;
                    }
                    return removeDigitNumber;
                });
            }}
        ></Button>
    );
}
