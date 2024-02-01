import React, { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  console.log(input);
  return (
    <div>
      <form action="">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name=""
          id="search"
          value={input}
          onChange={handleInputChange}
        />
      </form>
      <p>{input}</p>
    </div>
  );
};

export default Input;
