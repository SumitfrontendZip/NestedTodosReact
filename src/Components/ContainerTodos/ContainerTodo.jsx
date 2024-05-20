import TodoList from '../Showtodos/TodoList'
import './ContainerTodo.css'
function ContainerTodo({ items, classUpdate = false }) {

    function handlemargin(styleMargin) {
        return (
            <div id="ContainerTodos" style={styleMargin}>
                {
                    items.map((item) => (
                        <TodoList itemData={item} key={item.id} id={item.id} />
                    ))
                }
            </div>
        )
    }
    return (
        classUpdate ? handlemargin({ margin: "0px 0px 0px 100px" }) : handlemargin()
    )
}

export default ContainerTodo;
