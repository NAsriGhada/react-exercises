import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };
  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setInput("");
    setResult("");
  };
  console.log(input);
  return (
    <div>
      <div>
        <input type="text" value={input} readOnly />
      </div>
      <div>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
      <p>result: {result}</p>
    </div>
  );
};

export default Calculator;
