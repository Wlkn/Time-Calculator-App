import { useState } from "react";
import ButtonBox from "./components/ButtonBox.jsx";
import { CalcProvider } from "./components/CalculatorContext.jsx";
import EqualButton from "./components/EqualButton.jsx";
import NumberButton from "./components/NumberButton.jsx";
import OperatorButton from "./components/OperatorButton.jsx";
import Screen from "./components/Screen.jsx";
import TimeButton from "./components/TimeButton.jsx";
import Wrapper from "./components/Wrapper.js";



function App() {
    const [screenState, setScreenState] = useState("0");
    const [lastUsedBtnState, setLastUsedBtnState] = useState(null);

    
    const timeBtns = ["H", "M", "S"].map((e) => {
        console.log(e);
        return new TimeButton({ value: e, setLastUsedBtnState });
    });
    const operatorBtns = ["÷", "×", "-", "+"].map(
        (e) => new OperatorButton({ value: e, setScreenState, setLastUsedBtnState })
    );
    const numberBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."].map(
        (e) => new NumberButton({ value: e, setScreenState, setLastUsedBtnState })
    );
    const btnValues = [
        [...timeBtns, operatorBtns[0]],
        [...numberBtns.splice(0, 3), operatorBtns[1]],
        [...numberBtns.splice(0, 3), operatorBtns[2]],
        [...numberBtns.splice(0, 3), operatorBtns[3]],
        [...numberBtns.splice(0, 2), new EqualButton({setScreenState, setLastUsedBtnState})],
    ];




    return (
        <CalcProvider>
            <Wrapper>
                <Screen value={screenState}/>
                <ButtonBox>
                    {btnValues.flat().map((btn) => {
                        return btn;
                    })}
                </ButtonBox>
            </Wrapper>
        </CalcProvider>
    );
}
export default App;
