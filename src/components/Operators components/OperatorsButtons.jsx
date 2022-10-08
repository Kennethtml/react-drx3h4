import React from "react";
import "./operators.css";

const OperatorButtons = ({
  setCurrentOperand,
  setOperator,
  currentOperand,
  setFinalOperand,
  finalOperand,
  operator,
  evaluate,
}) => {
  const operators = ["+", "-", "/", "x"];

  function Operation(sign) {
    if (!finalOperand) {
      setFinalOperand(currentOperand);
      setCurrentOperand("");
    }
    if (!operator && currentOperand) {
      setFinalOperand(currentOperand);
      setCurrentOperand("");
    }
    if (finalOperand && operator && currentOperand) {
      evaluate();
      setOperator("");
    }

    setOperator(sign);
  }

  return (
    <div className="operator-buttons">
      {operators.map((operator) => {
        return (
          <button key={operator} onClick={() => Operation(operator)}>
            {operator}
          </button>
        );
      })}
    </div>
  );
};

export default OperatorButtons;
