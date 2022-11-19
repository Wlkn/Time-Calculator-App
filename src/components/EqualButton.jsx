import Button from "./Button";

export default function EqualButton({setScreenState, setLastUsedBtnState}) {
    const handleBtnClick = () => {
        console.log("=");
    };
    return (
        <Button
            className="equal-btn"
            value={"="}
            key={"="}
            onClick={() => {
                setScreenState(state => {
                    return eval(state.replaceAll('×', '*'))
                });
            }}
        ></Button>
    );
}
