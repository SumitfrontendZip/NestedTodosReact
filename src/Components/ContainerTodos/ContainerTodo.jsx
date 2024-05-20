import { useState } from 'react';
import TodoList from '../Showtodos/TodoList'
import './ContainerTodo.css'
function ContainerTodo({ items, classUpdate = false }) {
    const [itemsState, setItemsState] = useState(items);


    return (
        <div id="ContainerTodos" style={{ margin: classUpdate ? "0px 0px 0px 100px" : "0px" }}>
            {itemsState.map((item) => (
                <TodoList itemData={item} key={item.id} setItems={setItemsState} />
            ))}
        </div>
    );
}

export default ContainerTodo;