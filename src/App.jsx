import { useState } from "react";
import "./App.css";
import InputContainer from "./InputContainer";
import ToDoContainer from "./ToDoContainer";

function App() {
  const [InputVal, setInputVal] = useState("");

  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (InputVal != "") {
      setTodos((prevTodos) => [...prevTodos, InputVal]);
      setInputVal("");
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }

  return (
    <>
      <h1>To Do List</h1>
      <InputContainer
        InputVal={InputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <ToDoContainer todos={todos} delTodo={delTodo} />
    </>
  );
}

export default App;
