import "./style.css";
import Screen from "./components/Screen component/Screen";
import Numbers from "./components/Numbers buttons/Numbers";
import { useEffect, useState } from "react";
import OperatorButtons from "./components/Operators components/OperatorsButtons";

function App() {
  const [currentOperand, setCurrentOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [finalOperand, setFinalOperand] = useState("");
  const [memory, setMemory] = useState([]);
  const [memoryIndex, setMemoryIndex] = useState(0);


  //gets the last calculated value from memory when the 'M' button is clicked
  function getMemory() {
    if (memory.length <= 0) return;
    if (memoryIndex < 0) return;
    setCurrentOperand(memory?.[memoryIndex]);
    setMemoryIndex(memoryIndex - 1);
  }

  //saves the values of the final operand in memory state
  useEffect(() => {
    if (!finalOperand) return;
    setMemory((prevMemory) => {
      let newMemory = [...prevMemory];
      newMemory.push(finalOperand);
      return newMemory;
    });
  }, [finalOperand]);


//syncs the memory index with changes in the memory
  useEffect(() => setMemoryIndex(memory.length - 1), [memory]);


  //does the evaluation of the current and final operand values
  function evaluate() {
    if (!currentOperand && !finalOperand) return;
    if (!operator && currentOperand) {
      setFinalOperand(currentOperand);
      setCurrentOperand("");
    }

    const currentvalue = currentOperand.includes(".")
      ? parseFloat(currentOperand)
      : parseInt(currentOperand);

    const FinalValue = finalOperand.includes(".")
      ? parseFloat(finalOperand)
      : parseInt(finalOperand);

    let result;

    if (operator === "+") {
      result = String(currentvalue + FinalValue);
    }
    if (operator === "-") {
      result = String(FinalValue - currentvalue);
    }
    if (operator === "/") {
      result = String(FinalValue / currentvalue);
    }
    if (operator === "x") {
      result = String(currentvalue * FinalValue);
    }

    if (result) {
      setFinalOperand(result);
      setCurrentOperand("");
    }

    setOperator("");
  }

  //resets the calculator when the AC button is clicked
  function reset() {
    setCurrentOperand("");
    setFinalOperand("");
    setOperator("");
  }

  return (
    <div className="container">
      <Screen currentOperand={currentOperand} finalOperand={finalOperand} />

      <div className="buttons">
        <Numbers setCurrentOperand={setCurrentOperand} />

        <OperatorButtons
          setCurrentOperand={setCurrentOperand}
          operator={operator}
          setOperator={setOperator}
          finalOperand={finalOperand}
          setFinalOperand={setFinalOperand}
          currentOperand={currentOperand}
          evaluate={evaluate}
        />

        <div className="btn">
          <button onClick={evaluate} className="eval-button">
            =
          </button>
          <button className="reset-button" onClick={reset}>
            AC
          </button>
          <button className="memory-button" onClick={getMemory}>
            M
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
