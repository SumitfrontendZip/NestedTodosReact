import { useState } from 'react';
import TodoList from '../Showtodos/TodoList'
import './ContainerTodo.css'
function ContainerTodo({ items, classUpdate = false, id }) {
    const [itemsUpdate, setItemsUpdate] = useState(items);

    function removeItem(idToRemove) {
        setItemsUpdate(prevItems => prevItems.filter(item => item.id !== idToRemove));
    }
  
    return (
      <div>
        {itemsUpdate.map(item => (
          <TodoList 
            key={item.id} 
            itemData={item} 
            id={item.id} 
            updateItems={removeItem} 
          />
        ))}
      </div>
    );
}

export default ContainerTodo;
