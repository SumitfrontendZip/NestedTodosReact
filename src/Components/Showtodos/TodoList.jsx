
import { useState } from "react"
import InputBox from "../InputData/InputBox"
import cross from "./cross.png"
import plus from './plus.png'
import './TodoList.css'


function TodoList({ itemData, id , updateItems}) {
  const [data, setData] = useState(false)

  function addComments() {
    setData(true)
  }

  function removeItem() { 
    updateItems(id)
  }
  return (
    <>
      <div id="listContainer" >
        <input type="checkbox" />
        <div id="content">{itemData.value}</div>
        <div id="icons">
          <img src={plus} onClick={addComments} alt="" />
          <img src={cross} onClick={removeItem} alt="" />
        </div>
      </div>
      {data && <InputBox id={id} classUpdate={true} parentId={id}/>}
    </>
  )
}

export default TodoList
