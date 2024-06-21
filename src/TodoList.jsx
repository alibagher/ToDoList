import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
      <ul className="list">
        {/* Curly bracket means that anything inside will be  */}
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
            <TodoItem 
            // Next two lines do the same thing.
            {...todo}
            id={todo.id} completed={todo.completed} title={todo.title} 
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}/>
          )
        })} 
      </ul>
    )
}