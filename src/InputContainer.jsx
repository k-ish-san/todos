import React from "react";

function InputContainer({InputVal, writeTodo, addTodo}){
    
  return (
    <div className="input-container">
      <label for="todo">Add a new task:</label>
      <input type="text" value={InputVal} onChange={writeTodo} />
      <button onClick={addTodo}> + </button>
    </div>
  );
}

export default InputContainer;
