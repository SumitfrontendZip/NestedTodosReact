import todo from './todo.png'
import './Navbar.css'
function Navbar(){
    return(
      <nav>
        <img src={todo} alt="" />
        <h1>Todos List</h1>
   
      </nav>
    )
}

export default Navbar;