import "./Button.css";

function Button({ className, value, onClick }) {
    return (
        <div className={[className, "btn"].join(" ")} onClick={onClick}>
            {value}
        </div>
    );
}

export default Button;
