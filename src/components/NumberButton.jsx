import Button from "./Button";


export default function NumberButton({ value }) {
    const handleBtnClick = () => {
        console.log(value)
    }
    return (
        <Button
            className={["number-btn", value === 0 ? "zero-btn" : ""].join(" ")}
            value={value}
            key={value}
            onClick={() => {
                handleBtnClick()
                console.log(`The number button has been clicked`);
            }}
        ></Button>
    );
}
