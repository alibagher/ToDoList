import "./styles.css"

export default function App(){
  return (
    // Empty tag, can be used instead of a DIV
    <>
      <form className="new-item-form">
          <div className="form-row">
            {/* htmlFor associates the label with input. click on label to highlight the input. */}
            <label htmlFor="item"> New Item</label>
            <input type="text" id="item"/>
            <button className="btn">Add</button>
          </div>
      </form>
      <h1>Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox"/>
              Item 1
            <button className="btn btn-danger">Delete</button>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox"/>
              Item 2
            <button className="btn btn-danger">Delete</button>
          </label>
        </li>
      </ul>
    </>
  )
}