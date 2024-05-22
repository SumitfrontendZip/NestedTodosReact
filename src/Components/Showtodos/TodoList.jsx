
import { useState } from "react"
import InputBox from "../InputData/InputBox"
import cross from "./cross.png"
import plus from './plus.png'
import './TodoList.css'


function TodoList({ itemData, id, updateItems }) {
  const [showInput, setShowInput] = useState(false)


  const addComments = () => setShowInput(true)
  const removeComment = ()=> updateItems(id)

  return (
    <>
      <div id="listContainer" >
        <input type="checkbox" />
        <div id="content">{itemData.value}</div>
        <div id="icons">
          <img src={plus} onClick={addComments} alt="add" />
          <img src={cross} onClick={removeComment} alt="remove" />
        </div>
      </div>
      {showInput && <InputBox id={id} classUpdate={true} parentId={id} />}

    </>
  )
}

export default TodoList
