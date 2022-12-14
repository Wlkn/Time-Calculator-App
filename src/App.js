import { useState } from "react";
import ButtonBox from "./components/ButtonBox.jsx";
import EqualButton from "./components/Buttons/EqualButton.jsx";
import NumberButton from "./components/Buttons/NumberButton.jsx";
import OperatorButton from "./components/Buttons/OperatorButton.jsx";
import Screen from "./components/Screen.jsx";
import TimeButton from "./components/Buttons/TimeButton.jsx";
import Wrapper from "./components/Wrapper.jsx";
import RemoveButton from "./components/Buttons/RemoveButton.jsx";

function App() {
    const [screenState, setScreenState] = useState("0");
    const [lastUsedBtnState, setLastUsedBtnState] = useState(null);

    const timeBtns = ["H", "M", "S"].map((e) => {
        return new TimeButton({
            value: e,
            setScreenState,
            setLastUsedBtnState,
        });
    });
    const operatorBtns = ["÷", "×", "-", "+"].map(
        (e) =>
            new OperatorButton({
                value: e,
                setScreenState,
                setLastUsedBtnState,
            })
    );
    const numberBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."].map(
        (e) =>
            new NumberButton({ value: e, setScreenState, setLastUsedBtnState })
    );
    const btnValues = [
        [...timeBtns, operatorBtns[0]],
        [...numberBtns.splice(0, 3), operatorBtns[1]],
        [...numberBtns.splice(0, 3), operatorBtns[2]],
        [...numberBtns.splice(0, 3), operatorBtns[3]],
        [
            ...numberBtns.splice(0, 2),
            new RemoveButton({ setScreenState, setLastUsedBtnState }),
            new EqualButton({ setScreenState, setLastUsedBtnState }),
        ],
    ];

    return (
        <Wrapper>
            <Screen
                value={screenState}
                onSlideChange={() => {
                    setScreenState("0");
                }}
            />
            <ButtonBox>{btnValues.flat()}</ButtonBox>
        </Wrapper>
    );
}
export default App;
