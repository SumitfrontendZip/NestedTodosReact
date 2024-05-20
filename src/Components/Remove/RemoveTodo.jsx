import { useState } from 'react';
import ContainerTodo from '../ContainerTodos/ContainerTodo';

function ParentComponent({items ,classUpdate}) {
  const[itemsUpdate, setItemsUpdate] = useState(items);

  function handleRemoveItem(idToRemove) {
    setItemsUpdate(prevItems => prevItems.filter(item => item.id !== idToRemove));
  }
  console.log(itemsUpdate);
  return (
    <ContainerTodo items={itemsUpdate} onRemoveItem={handleRemoveItem} classUpdate={classUpdate} />
  );
}

export default ParentComponent;
