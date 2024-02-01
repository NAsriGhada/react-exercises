import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Props from "./components/Props";
import Colour from "./components/Colour";
import Calculator from "./components/Calculator";
import TodoList from "./components/TodoList";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const toggleHandler = () => {
    setIsVisible(!isVisible);
  };
  const message = "I'm coming from the parent component";
  return (
    <div className="App">
      <button onClick={toggleHandler}>{isVisible ? "hide" : "show"}</button>
      {isVisible && (
        <>
          <Counter />
          <Input />
          <Props msg={message} />
          <Colour />
          <Calculator />
          <TodoList />
        </>
      )}
    </div>
  );
}

export default App;
