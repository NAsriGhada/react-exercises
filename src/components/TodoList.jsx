import React, { useState } from "react";

const TodoList = () => {
  const [input, setNewInput] = useState("");
  const [tasks, setTasks] = useState([]);
  // onChange handler
  const onchangeHandler = (e) => {
    setNewInput(e.target.value);
  };
  // add task
  const addTasksHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: input,
          completed: false,
        },
      ]);
    }
    setNewInput("");
  };
  console.log(tasks);
  // toggle task
  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  // delete handler
  const deleteHandler = (taskId) => {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== taskId));
  };
  return (
    <div>
      <p>TodoList</p>
      <form action="">
        <input
          type="text"
          value={input}
          onChange={onchangeHandler}
          placeholder="Enter a new task"
        />
        <button onClick={addTasksHandler}>Add Task</button>
      </form>
      <ul>
        {tasks.map((el) => {
          return (
            <li key={el.id}>
              <input
                type="checkbox"
                checked={el.completed}
                onChange={() => toggleTask(el.id)}
              />
              <span
                style={{
                  textDecoration: el.completed ? "line-through" : "none",
                }}
              >
                {el.text}
              </span>
              <button onClick={() => deleteHandler(el.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
