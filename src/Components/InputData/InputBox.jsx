import { useState } from 'react';
import './InputBox.css'
import ContainerTodo from '../ContainerTodos/ContainerTodo';

function InputBox() {
    const [valueInput, setValueInput] = useState("");
    const [data , setData] = useState("");
    const [items , setItems] = useState([])

    function getInputValue() {
        setValueInput(data)
        setItems((prevItems) => [...prevItems, {
            id:Math.random(),
            value:data
        }])
    }
   
    return (
        <>
            <div id="inputContainer">
                <input type="text" placeholder='Enter your comment' value={data} onChange={(e) => setData(e.target.value)} />
                <button onClick={()=>getInputValue()}>Comment</button>
            </div>
            <ContainerTodo dataValue={items}/>
           

        </>
    )
}
export default InputBox;