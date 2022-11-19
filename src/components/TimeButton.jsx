import Button from "./Button";

export default function TimeButton({ value, setLastUsedBtnState }) {
    const handleBtnClick = () => {
        console.log(value);
    };
    return (
        <Button
            className="time-btn"
            value={value}
            key={value}
            onClick={() => {
                handleBtnClick();
            }}
        ></Button>
    );
}
