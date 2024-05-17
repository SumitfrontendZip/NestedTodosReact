import cross from "./cross.png"
import plus from './plus.png'
import './TodoList.css'
function TodoList({value}) {
  return (
    <div id="listContainer">
      <input type="checkbox" />
      <div id="content">{value}</div>
      <div id="icons">
        <img src={plus} alt="" />
        <img src={cross} alt="" />
      </div>
    </div>
  )
}

export default TodoList
