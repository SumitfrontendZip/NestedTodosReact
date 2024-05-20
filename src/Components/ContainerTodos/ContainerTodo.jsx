import { useEffect, useState } from 'react';
import TodoList from '../Showtodos/TodoList'
import './ContainerTodo.css'
function ContainerTodo({ items, classUpdate = false }) {

    const [itemsUpdate, setItemsUpdate] = useState([]);4

    useEffect(() => {
        setItemsUpdate(items);
    }, [items]);

    function removeItem(idToRemove) {
        setItemsUpdate(prevItems => prevItems.filter(item => item.id !== idToRemove));
    }

    function handlemargin(styleMargin) {
        return (
            <div id="ContainerTodos" style={styleMargin}>
                {
                    itemsUpdate.map((item) => (
                        <TodoList
                            itemData={item}
                            key={item.id}
                            id={item.id}
                            updateItems={removeItem}
                        />
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
