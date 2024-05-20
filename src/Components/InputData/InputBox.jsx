import { useState } from 'react';
import './InputBox.css'
import ContainerTodo from '../ContainerTodos/ContainerTodo';

function InputBox({ classUpdate = false, id }) {
    const [data, setData] = useState("");
    const [items, setItems] = useState([])

    function getInputValue() {
        setItems((prevItems) =>
            [...prevItems, {
                id: Math.floor(Math.random() * 10000000),
                value: data,
                backComment: prevItems.length > 0 ? [...prevItems.map(item => item.value)] : []
            }]
        )
        setData("");
      
    }


    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            getInputValue();
        }
    }

    return (
        <>
            <div id="inputContainer" style={{ margin: classUpdate ? "0px 0px 0px 100px" : "0px" }}>
                <input type="text" placeholder='Enter your comment' value={data} onChange={(e) => setData(e.target.value)} onKeyDown={handleKeyDown} />
                <button onClick={() => getInputValue()}>Comment</button>
            </div>
            <ContainerTodo items={items} classUpdate={classUpdate} />

        </>
    )
}
export default InputBox;