import Button from "./Button";

export default function OperatorButton({ value }) {
    const handleBtnClick = () => {
        console.log(value)
    }
    return (
        <Button
            className="operator-btn"
            value={value}
            key={value}
            onClick={() => {
                handleBtnClick()
            }}
        ></Button>
    );
}
