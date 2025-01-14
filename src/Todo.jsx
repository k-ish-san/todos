import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";

function Todo({todo, index, delTodo}) {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={() => delTodo(index)} className="dustbin-button">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Todo;