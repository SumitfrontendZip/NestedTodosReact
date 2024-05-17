import TodoList from '../Showtodos/TodoList'
import './ContainerTodo.css'
function ContainerTodo({items}) {
    return (
        <div id="ContainerTodos">
           {
                items.map((item) => (
                    <TodoList itemData={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default ContainerTodo;
