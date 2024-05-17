import { useState } from 'react';
import './InputBox.css'
import ContainerTodo from '../ContainerTodos/ContainerTodo';

function InputBox() {
    const [data, setData] = useState("");
    const [items, setItems] = useState([])

    function getInputValue() {
        setItems((prevItems) => [...prevItems, {
            id: Math.floor(Math.random() * 10000000),
            value: data
        }])
        setData("");
    }

    return (
        <>
            <div id="inputContainer">
                <input type="text" placeholder='Enter your comment' value={data} onChange={(e) => setData(e.target.value)} />
                <button onClick={() => getInputValue()}>Comment</button>
            </div>
            <ContainerTodo items={items}/>
        </>
    )
}
export default InputBox;