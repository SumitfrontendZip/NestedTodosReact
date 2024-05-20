import { useState } from 'react';
import './InputBox.css'

function InputBox() {
    const [data, setData] = useState("")

    function handleData() {
        setData(data)
    }



    return (
        <>
            <div id="inputContainer" >
                <input type="text" placeholder='Enter your comment' value={data} onChange={(e) => setData(e.target.value)} />
                <button onClick={() => handleData()}>Comment</button>
            </div>

        </>
    )
}
export default InputBox;