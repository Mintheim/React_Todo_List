// eslint-disable-next-line react/prop-types
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li id={id}>
      {/* Checkbox to mark the todo as completed */}
      <label>
        <input
          type="checkbox"
          checked={completed} // Set checkbox status based on the completed state
          onChange={e => toggleTodo(id, e.target.checked)} // Call toggleTodo to update completion status
        />
        {title} {/* Display the title of the todo */}
      </label>
      {/* Button to delete the todo item */}
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  )
}
