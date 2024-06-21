import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App(){
  const [todos, setTodos] = useState([])

  function toggleTodo(id, completed){
      setTodos(currentTodos =>{
        return currentTodos.map(todo => {
          if (todo.id == id ){ 
            return {...todo, completed}
          }
  
          return todo
        })
      })
    }
  
  function deleteTodo(id){
      setTodos (currentTodos => {
        return currentTodos.filter(todo => todo.id !== id)
      })
  }

  function addTodo(title){
    setTodos((currentTodos) => {
      return [...currentTodos, {id: crypto.randomUUID(), title, completed: false}]
    })
  }

  return (
    // Empty tag, can be used instead of a DIV
    <>
     <NewTodoForm onSubmit={addTodo}/>
     <h1>Todo List</h1>
     <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}