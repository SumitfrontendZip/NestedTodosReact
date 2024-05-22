import { useState } from 'react';
import './InputBox.css'
import { v4 as uuid } from 'uuid';
import ContainerTodo from '../ContainerTodos/ContainerTodo';

function InputBox({ classUpdate = false, id, parentId = null }) {
    const [data, setData] = useState("");
    const [items, setItems] = useState([])
    function getInputValue() {
        if (data.trim() === '')  return
        setItems((prevItems) =>
            [...prevItems, {
                id: uuid(),
                value: data,
                parentId: parentId
            }]
        )
        setData("");

    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            getInputValue();
        }
    }

    const margin = classUpdate ? { margin: "0px 0px 0px 100px" } : {}
    
    return (
        <>
            <div id="inputContainer" style={margin}>
                <input type="text" placeholder='Enter your comment' value={data} onChange={(e) => setData(e.target.value)} onKeyDown={handleKeyDown} />
                <button onClick={() => getInputValue()}>Comment</button>
            </div>
            <ContainerTodo items={items} classUpdate={classUpdate} />
        </>
    )
}
export default InputBox;
