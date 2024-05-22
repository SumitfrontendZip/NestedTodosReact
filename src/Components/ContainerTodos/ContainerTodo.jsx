import { useEffect, useState } from 'react';
import TodoList from '../Showtodos/TodoList'
import './ContainerTodo.css'

function ContainerTodo({ items, classUpdate = false }) {

    const [itemUpdate, setItemsUpdate] = useState(items)

   
    const removeItem = (idToRemove) => {
       
        const indexToRemove = items.findIndex((e) => {
            return e.id === idToRemove;
        });
        if (indexToRemove !== -1) items.splice(indexToRemove, 1);
  
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
