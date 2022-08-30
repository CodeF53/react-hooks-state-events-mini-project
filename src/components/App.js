import React from "react";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [filter, setFilter] = useState("All")

  function deleteTask(i) {
    let newTasks = [...tasks]
    newTasks.splice(i, 1)
    setTasks(newTasks)
  }

  function addTask(task) {
    setTasks([...tasks, task])
  }

  const filteredTasks = filter==="All"? tasks : tasks.filter((task)=>task.category===filter)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setFilter={setFilter} selected={filter}/>
      <NewTaskForm CATEGORIES={CATEGORIES.slice(1)} addTask={addTask}/>
      <TaskList TASKS={filteredTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
