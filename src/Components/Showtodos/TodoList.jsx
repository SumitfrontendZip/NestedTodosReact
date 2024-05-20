import { useState } from "react"
import InputBox from "../InputData/InputBox"
import cross from "./cross.png"
import plus from './plus.png'
import './TodoList.css'


function TodoList({ itemData, setItems }) {
  const [showInputBox, setShowInputBox] = useState(false);

  const addComments = () => {
    setShowInputBox(true);
    setItems((prevItems) =>
      prevItems.map(prevItem => ({
        ...prevItem,
        backComment: [...prevItem.backComment, itemData.value]
      }))
    );
  };

  function removeComment() {

  }
  return (
    <>
      <div id="listContainer" >
        <input type="checkbox" />
        <div id="content">{itemData.value}</div>
        <div id="icons">
          <img src={plus} onClick={addComments} alt="" />
          <img src={cross} onClick={removeComment} alt="" />
        </div>
      </div>
      {showInputBox && <InputBox setItems={setItems} classUpdate={true}  />}
    </>
  )
}

export default TodoList