import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // Evaluating the expression
    } catch {
      setInput("Error"); // Handling invalid expressions
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <h2 className="title">Calculator</h2> {/* Added Heading */}
        <input type="text" className="display" value={input} readOnly />
        <div className="buttons">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) =>
            btn === "=" ? (
              <button key={btn} className="button equal" onClick={handleCalculate}>
                {btn}
              </button>
            ) : (
              <button key={btn} className="button" onClick={() => handleClick(btn)}>
                {btn}
              </button>
            )
          )}
          <button className="button clear" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
