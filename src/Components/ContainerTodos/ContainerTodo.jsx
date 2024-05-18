import TodoList from '../Showtodos/TodoList'
import './ContainerTodo.css'
function ContainerTodo({ items, classUpdate = false } ) {
 
function handlemargin() {
        return (
            <div id="ContainerTodos" style={{margin:"0px 0px 0px 100px"}}>
                {
                    items.map((item) => (
                        <TodoList itemData={item} key={item.id} id={item.id} />
                    ))
                }
            </div>
        )
    }
    function handleWithoutMargin() {
        return (
            <div id="ContainerTodos">
                {
                    items.map((item) => (
                        <TodoList itemData={item} key={item.id} id={item.id} />
                    ))
                }
            </div>
        )
    }

    return (
        classUpdate ? handlemargin() : handleWithoutMargin()
    )
}

export default ContainerTodo;
