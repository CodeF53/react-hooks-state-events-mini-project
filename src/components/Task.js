import React from "react";

function Task({text, category, deleteCallback}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteCallback}>X</button>
    </div>
  );
}

export default Task;
