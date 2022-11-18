import Button from "./Button";

export default function EqualButton() {
    return (
        <Button
            className="equal-btn"
            value={"="}
            key={"="}
            onClick={() => {
                console.log(`equal button clicked`)
            }}
        ></Button>
    );
}
