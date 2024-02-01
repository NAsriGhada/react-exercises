import React, { useState } from "react";

const Colour = () => {
  const [color, setColor] = useState("");

  const handleColorChange = () => {
    // Generate a random color
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const handleClick = () => {
    const newColor = handleColorChange();
    setColor(newColor);
  };

  console.log(color);

  return (
    <div>
      <p style={{ color: color }}>I want to change this color to: {color}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Colour;
