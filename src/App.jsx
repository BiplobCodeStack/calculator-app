import { useState, useEffect } from "react";
import "./App.css";

const Calculator = () => {
  const [input, setInput] = useState("0");

  useEffect(() => {
    const savedValue = localStorage.getItem("calculatorValue");
    if (savedValue) setInput(savedValue);
  }, []);

  useEffect(() => {
    localStorage.setItem("calculatorValue", input);
  }, [input]);

  const handleClick = (value) => {
    if (value === "C") {
      setInput("0");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input === "0" ? value : input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {["C", "%", "±", "/"].map((op) => (
          <button key={op} className="operator" onClick={() => handleClick(op)}>
            {op}
          </button>
        ))}
        {[7, 8, 9, "x"].map((val) => (
          <button key={val} className={val === "x" ? "operation" : "number"} onClick={() => handleClick(val.toString())}>
            {val}
          </button>
        ))}
        {[4, 5, 6, "-"].map((val) => (
          <button key={val} className={val === "-" ? "operation" : "number"} onClick={() => handleClick(val.toString())}>
            {val}
          </button>
        ))}
        {[1, 2, 3, "+"].map((val) => (
          <button key={val} className={val === "+" ? "operation" : "number"} onClick={() => handleClick(val.toString())}>
            {val}
          </button>
        ))}
        {[0, ".", "="].map((val) => (
          <button key={val} className={val === "=" ? "operation" : "number"} onClick={() => handleClick(val.toString())}>
            {val}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
