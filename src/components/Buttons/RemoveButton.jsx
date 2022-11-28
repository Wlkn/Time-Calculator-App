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
                    if (state !== 0) {
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
                        } else if (state.length === 1 || state.length === 0) {
                            setScreenState(0);
                        }
                        return removeDigitNumber;
                    }else {
                        return state
                    }
                });
            }}
        ></Button>
    );
}
