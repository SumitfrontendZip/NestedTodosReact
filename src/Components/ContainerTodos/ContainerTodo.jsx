import TodoList from '../Showtodos/TodoList'
import './ContainerTodo.css'
function ContainerTodo({ items, classUpdate = false } , setItems) {
 
function handlemargin() {
        return (
            <div id="ContainerTodos" style={{margin:"0px 0px 0px 100px"}}>
                {
                    items.map((item) => (
                        <TodoList itemData={item} key={item.id} id={item.id} setItems={setItems} />
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
