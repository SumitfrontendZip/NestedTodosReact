import todo from './todo.png'
import plus from './plus.png'
import './Navbar.css'
function Navbar(){
    return(
      <nav>
        <img src={todo} alt="" />
        <h1>Todos List</h1>
        <img src={plus} alt="" />
      </nav>
    )
}

export default Navbar;