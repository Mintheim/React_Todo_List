/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/* Display a message if there are no todos */}
      {todos.length === 0 && "No Todos"}
      {/* Render a TodoItem for each todo in the list */}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo} // Spread the todo object to pass individual properties
            key={todo.id} // Unique key for each todo item
            toggleTodo={toggleTodo} // Function to toggle the completion status
            deleteTodo={deleteTodo} // Function to delete the todo item
          />
        )
      })}
    </ul>
  )
}
