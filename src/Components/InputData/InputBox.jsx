import { useState } from 'react';
import './InputBox.css'
import ContainerTodo from '../ContainerTodos/ContainerTodo';

function InputBox({ classUpdate = false, id, parentId = null }) {

    const [data, setData] = useState("");
    const [items, setItems] = useState([])

    function getInputValue() {
        if (data.trim() === '')  return
        setItems((prevItems) =>
            [...prevItems, {
                id: Math.floor(Math.random() * 10000000),
                value: data,
                backComment: [],
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

    function handleMargin(styleMargin) {

        return (
            <div id="inputContainer" style={styleMargin}>
                <input type="text" placeholder='Enter your comment' value={data} onChange={(e) => setData(e.target.value)} onKeyDown={handleKeyDown} />
                <button onClick={() => getInputValue()}>Comment</button>
            </div>

        )
    }

    
    return (
        <>
            {
                classUpdate ? handleMargin({ margin: "0px 0px 0px 100px" }) : handleMargin()
            }
            <ContainerTodo items={items} classUpdate={classUpdate} />
        </>
    )
}
export default InputBox;


// UP@123