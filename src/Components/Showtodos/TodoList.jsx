import { useState } from "react"
import InputBox from "../InputData/InputBox"
import cross from "./cross.png"
import plus from './plus.png'
import './TodoList.css'

function removeComment(setItems){
  return setItems([])
}

function TodoList({ itemData, id , setItems}) {

  const [data, setData] = useState(false)

  function addComments() {
    setData(true)
  }

  function removeComment(){
    return setItems([])
  }
  
 
  return (
    <>
      <div id="listContainer" >
        <input type="checkbox" />
        <div id="content">{itemData.value}</div>
        <div id="icons">
          <img src={plus} onClick={addComments} alt="" />
          <img src={cross} onClick={removeComment}  alt="" />
        </div>
      </div>
      {data && <InputBox id={id} classUpdate={true}/>}
    </>
  )
}

export default TodoList