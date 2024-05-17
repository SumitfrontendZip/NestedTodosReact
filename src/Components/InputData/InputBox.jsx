import { useState } from 'react';
import './InputBox.css'
import ContainerTodo from '../ContainerTodos/ContainerTodo';

function InputBox({ classUpdate=false }) {
    const [data, setData] = useState("");
    const [items, setItems] = useState([])



    function getInputValue() {
        setItems((prevItems) => [...prevItems, {
            id: Math.floor(Math.random() * 10000000),
            value: data,
        }])
        setData("");
    }


    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            getInputValue();
        }
    }
    
    function handleMargin() {
        return (
            <div id="inputContainer" style={{margin:"0px 0px 0px 100px"}}>
                <input type="text" placeholder='Enter your comment' value={data} onChange={(e) => setData(e.target.value)} onKeyDown={handleKeyDown} />
                <button onClick={() => getInputValue()}>Comment</button>
            </div>
        )
    }

    function handleWithoutMargin() {
        return (
            <div id="inputContainer">
                <input type="text" placeholder='Enter your comment' value={data} onChange={(e) => setData(e.target.value)} onKeyDown={handleKeyDown} />
                <button onClick={() => getInputValue()}>Comment</button>
            </div>
        )
    }


    return (
        <>
            {
                classUpdate? handleMargin() : handleWithoutMargin()
            }
            <ContainerTodo items={items} classUpdate={classUpdate} setItems={setItems}/>
        </>
    )
}
export default InputBox;