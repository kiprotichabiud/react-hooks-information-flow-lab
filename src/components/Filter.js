import React from "react";

function filter({onCategoryChange}){
    function handleCategoryChange(event){
        const selectedCategory = event.target.value;
        onCategoryChange(selectedCategory)
    }
    return(
        <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" onChange={handleCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        </div>
    )
  
}


export default filter;