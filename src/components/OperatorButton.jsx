import Button from "./Button";

export default function OperatorButton({ value }) {
    return (
        <Button
            className="operator-btn"
            value={value}
            key={value}
            onClick={() => {
                console.log(
                    `An operator Button has been clicked which might be +,-,/ or *`
                );
            }}
        ></Button>
    );
}
