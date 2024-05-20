import { useState } from 'react';
import TodoList from '../Showtodos/TodoList';

function ParentComponent() {
  const [items, setItems] = useState([]);

  function removeItem(idToRemove) {
    setItems(prevItems => prevItems.filter(item => item.id !== idToRemove));
  }

  return (
    <div>
      {items.map(item => (
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

export default ParentComponent;
