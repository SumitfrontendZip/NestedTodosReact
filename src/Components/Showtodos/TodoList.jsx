import cross from "./cross.png"
import plus from './plus.png'
import './TodoList.css'
function TodoList() {
  return (
    <div id="listContainer">
      <input type="checkbox"  />
      <div id="content">ggadgasd</div>
      <img src={plus} alt="" />
      <img src={cross} alt="" />
    </div>
  )
}

export default TodoList
