import Button from "./Button";

export default function RemoveButton({ setScreenState }) {
    return (
        <Button
            className="Remove-btn"
            value={"←"}
            key={"←"}
            onClick={() => {
                setScreenState((state) => {
                    if (state.slice(-1) === " ") {
                        return state.slice(0, -3);
                    }
                });
            }}
        ></Button>
    );
}
