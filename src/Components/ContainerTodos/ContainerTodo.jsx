import { useEffect, useState } from 'react';
import TodoList from '../Showtodos/TodoList'
import './ContainerTodo.css'

function ContainerTodo({ items, classUpdate = false }) {

    const [itemUpdate, setItemsUpdate] = useState(items)

    // Remove item by id
    const removeItem = (idToRemove) => {
       
        const indexToRemove = items.findIndex((e) => {
            return e.id === idToRemove;
        });
      
       
        if (indexToRemove !== -1) {
            // Remove the item from the items array
            items.splice(indexToRemove, 1);
            console.log("Item removed successfully");
        }
        
        setItemsUpdate(itemUpdate.filter(item => item.id !== idToRemove))
    }

    useEffect(() => {
        setItemsUpdate(items)
    }, [items])

    const margin = classUpdate ? { margin: "0px 0px 0px 100px" } : {}
    return (
        <div id="ContainerTodos" style={margin}>
            {itemUpdate.map((item) => (
                <TodoList
                    itemData={item}
                    key={item.id}
                    id={item.id}
                    updateItems={removeItem}
                />
            ))}
        </div>
    );
}

export default ContainerTodo;
