import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import { TodoList } from "./TodoList"

export default function App() {
  // Initialize state with todos from local storage, or an empty array if none found
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  // Update local storage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  // Function to add a new todo item
  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  // Function to toggle the completion status of a todo item
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  // Function to delete a todo item with an animation
  function deleteTodo(id) {
    const itemElement = document.getElementById(id);
    if (itemElement) {
      itemElement.classList.add("fade-out");
      setTimeout(() => {
        setTodos(currentTodos => {
          return currentTodos.filter(todo => todo.id !== id);
        });
      }, 1500); // Wait for animation duration before removing item
    }
  }
  
  return (
    <>
      {/* Form to add new todos */}
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      {/* List of todos with toggle and delete functionality */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}
