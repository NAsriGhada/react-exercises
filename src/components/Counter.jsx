import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1) 
    }

    const handleDecrement = () => {
        setCount(count > 0 ? count - 1 : 0)
    }

    const handleReset = () => {
        setCount(0)
    }
  return (
    <div>
      <h1>Title</h1>
      <h2>count: {count}</h2>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default Counter