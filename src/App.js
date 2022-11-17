import Button from "./components/Button.js";
import ButtonBox from "./components/ButtonBox.js";
import Screen from "./components/Screen.js";
import Wrapper from "./components/Wrapper.js";

const btnValues = [
    ["H", "M", "S", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

function App() {
    return (
        <Wrapper>
            <Screen value={0} />
            <ButtonBox>
                {btnValues.flat().map((btn, i) => {
                    return (
                        <Button
                            key={i}
                            className={btn === 0 ? "zero" : "" || btn === "=" ? "equals" : ""}
                            value={btn}
                            onClick={() => {
                                console.log(`${btn} clicked!`);
                            }}
                        />
                    );
                })}
            </ButtonBox>
        </Wrapper>
    );
}
export default App;
