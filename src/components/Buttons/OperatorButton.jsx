import Button from "./Button";

export default function OperatorButton({
    value,
    setScreenState,
    setLastUsedBtnState,
}) {
    return (
        <Button
            className="operator-btn"
            value={value}
            key={value}
            onClick={() => {
                setLastUsedBtnState((lastUsedBtnState) => {
                    setScreenState((state) => {
                        console.log(lastUsedBtnState);
                        if (lastUsedBtnState === "O") {
                            // console.log("it worked");
                            return (
                                state.substring(0, state.length - 3) +
                                " " +
                                value +
                                " "
                            );
                            // }else if (lastUsedBtnState === "R") {
                            //     return (state + " " + value + " ")
                        }
                        return state + " " + value + " ";
                    });
                    return "O";
                });
            }}
        ></Button>
    );
}
