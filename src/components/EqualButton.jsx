import Button from "./Button";

export default function EqualButton() {
    const handleBtnClick = () => {
        console.log("=");
    };
    return (
        <Button
            className="equal-btn"
            value={"="}
            key={"="}
            onClick={() => {
                handleBtnClick();
            }}
        ></Button>
    );
}
