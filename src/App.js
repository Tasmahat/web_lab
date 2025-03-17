import './App.css';
import {useEffect, useState} from "react";

function App() {
    let [chosenFromSystem, setChosenFromSystem] = useState(2);
    let [chosenToSystem, setChosenToSystem] = useState(2);

    const listOfSystems = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    const listOfDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

    let [listOfButtonsForNumber, setListOfButtonsForNumber] = useState([listOfDigits
        .slice(0, chosenFromSystem)
        .map(i => {
            return(
                <button onClick={addDigitToNumber}>
                    {i}
                </button>
            )
        })])

    useEffect(() => {
        setListOfButtonsForNumber(listOfDigits
            .slice(0, chosenFromSystem)
            .map(i => {
                return(
                    <button onClick={addDigitToNumber}>
                        {i}
                    </button>
                )
            })
        )
    }, [chosenFromSystem]);

    function changeFromSystem() {
        setChosenFromSystem(+document.getElementById("from").value);
    }

    function changeToSystem() {
        setChosenToSystem(+document.getElementById("to").value);
        console.log(chosenToSystem)
    }

    let listOfSystemNumbersOptionsFrom = listOfSystems.map(i => {
        return(
            <option id = {"from" + i}>
                {i}
            </option>
        );
    });

    let listOfSystemNumbersOptionsTo = listOfSystems.map(i => {
        return(
            <option id = {"to" + i}>
                {i}
            </option>
        );
    });

    function addDigitToNumber(e) {
        var input = document.getElementById("number-to-convert");
        input.value += e.target.innerHTML;
    }

    function clearInputAndIutputNumbers() {
        document.getElementById("number-to-convert").value = "";
        document.getElementById("converted-number").value = "";
    }

    function convertNumber() {
        console.log(chosenFromSystem, chosenToSystem)
        var value = document.getElementById("number-to-convert").value;
        document.getElementById("converted-number").value = parseInt(value, chosenFromSystem).toString(chosenToSystem);
    }

    return (
        <div>
            <h1>Выберите систему исчисления из которой переводите:</h1>
            <select id={"from"} onChange={changeFromSystem}>
                {listOfSystemNumbersOptionsFrom}
            </select>
            <h1>Выберите систему исчисления в которую переводите:</h1>
            <select id={"to"} onChange={changeToSystem}>
                {listOfSystemNumbersOptionsTo}
            </select>
            <h1>Введите число:</h1>
            <div>
                {listOfButtonsForNumber}
            </div>
            <input type={"text"} id={"number-to-convert"} readOnly={true}/>
            <button onClick={clearInputAndIutputNumbers}>X</button>
            <button onClick={convertNumber}>Рассчитать</button>
            <h1>Итоговое число:</h1>
            <input type={"text"} id={"converted-number"} readOnly={true}/>
        </div>
    );
}

export default App;
