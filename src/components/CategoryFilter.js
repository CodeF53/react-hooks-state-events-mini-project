import React from "react";

function filterButton(cat, callback, selected) {
  let className = ""
  if (cat === selected) {
    className = "selected"
  }
  return (
    <button key={cat} className={className} onClick={()=>{callback(cat)}}>{cat}</button>
  )
}

function CategoryFilter({ categories, setFilter, selected }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat)=>filterButton(cat, setFilter, selected))}
    </div>
  );
}

export default CategoryFilter;
