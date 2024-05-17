import { useState } from 'react';
import './InputBox.css'

function InputBox(){
    const [valueInput , setValueInput] = useState("")
    
    function getInputValue(){
        console.log(valueInput);
    }

    return (
        <div id="inputContainer">
            <input type="text" placeholder='Enter your comment' value={valueInput} onChange={(e)=>setValueInput(e.target.value)}/>
            <button onClick={getInputValue}>Comment</button>
        </div>
    )
}
export default InputBox;