import './Maintodo.css'
import Showtodo from './Showtodo';

function Maintodo(){
    return (
        <>
            <input type="text" placeholder='Enter Main Todo List' />
            <Showtodo/>
        </>
    )
}

export default Maintodo;