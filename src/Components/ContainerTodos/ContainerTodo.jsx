import TodoList from '../Showtodos/TodoList'
import './ContainerTodo.css'
function ContainerTodo({items}) {
    return (
        <div id="ContainerTodos">
           {
             items.map((e)=><TodoList key={e.id} value={e.title}/> )
           }
        </div>
    )
}

export default ContainerTodo;
