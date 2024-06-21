import { useState } from "react"
import "./styles.css"

export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])
  function handleSubmit(e){
    e.preventDefault()

    setTodos((currentTodos) => {
      return [...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false}]
    })

    setNewItem("")
  }

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

  return (
    // Empty tag, can be used instead of a DIV
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
          <div className="form-row">
            {/* htmlFor associates the label with input. click on label to highlight the input. */}
            <label htmlFor="item"> New Item</label>
            <input 
              value={newItem} 
              onChange={e => setNewItem(e.target.value)} 
              type="text" 
              id="item"/>
          </div>
          <button className="btn">Add</button>
      </form>
      <h1>Todo List</h1>
      <ul className="list">
        {/* Curly bracket means that anything inside will be  */}
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed}
                onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                  {todo.title}
                <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
              </label>
            </li>
          )
        })}
      </ul>
    </>
  )
}