import React from "react";
import Task from "./Task";

function TaskList({ TASKS, deleteTask }) {
  let tasks = []
  for (let i = 0; i<TASKS.length; i++) {
    tasks.push((
      <Task 
        text={TASKS[i].text} 
        category={TASKS[i].category}
        deleteCallback={()=>{deleteTask(i)}}
        key={i}
      />
    ))
  }

  return (
    <div className="tasks">
      {tasks}
    </div>
  );
}

export default TaskList;
