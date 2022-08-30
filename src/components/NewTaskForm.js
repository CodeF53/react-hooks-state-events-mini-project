import React, { useState } from "react";

function NewTaskForm({ CATEGORIES, addTask }) {
  const [details, setDetails] = useState("")
  const [category, setCategory] = useState("code")

  function submitTask(event) {
    event.preventDefault()
    const task = {
      text: details,
      category: category
    }
    addTask(task)
  }

  return (
    <form className="new-task-form" onSubmit={submitTask}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={(e)=>setDetails(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
          {CATEGORIES.map((cat)=>(<option key={cat} value={cat}>{cat}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
