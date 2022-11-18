import Button from "./Button";

export default function TimeButton({ value }) {
    return (
        <Button
            className="time-btn"
            value={value}
            key={value}
            onClick={() => {
                console.log(
                    `Time button has been clicked, which might be H,M or S`
                );
            }}
        ></Button>
    );
}
