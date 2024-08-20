/* eslint-disable react/prop-types */
import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  // State to manage the value of the new todo input field
  const [newItem, setNewItem] = useState("")

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior
    if (newItem === "") return; // Do nothing if the input field is empty

    onSubmit(newItem); // Call the onSubmit function passed as a prop with the new item

    setNewItem(""); // Clear the input field after submission
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Add New Todos</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)} // Update state with input field value
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button> {/* Button to submit the form */}
    </form>
  )
}
