import Button from "./Button";

export default function OperatorButton({ value, setScreenState, setLastUsedBtnState }) {
    return (
        <Button
            className="operator-btn"
            value={value}
            key={value}
            onClick={() => {
                setLastUsedBtnState(
                    lastUsedBtnState => {
                        setScreenState(state => {
                            if (lastUsedBtnState === "O") {
                                return state.substring(0, state.length - 3) + " " + value + " ";
                            }
                            return state + " " + value + " ";
                        });
                        return "O";
                    }
                );
                
            }}
        ></Button>
    );
}
