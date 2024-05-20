// import { useState } from 'react';
// import TodoList from '../Showtodos/TodoList'
// import './ContainerTodo.css'
// function ContainerTodo({ items, classUpdate = false, setItems, parentId }) {
//     const [itemsState, setItemsState] = useState(items);

//     return (
//         <div id="ContainerTodos" style={{ margin: classUpdate ? "0px 0px 0px 100px" : "0px" }} key={Math.random()*100}>
//             {itemsState.map((item) => (
//                 <TodoList itemData={item} key={item.id} setItems={setItemsState} parentId={parentId} />
//             ))}
//         </div>
//     );
// }

// export default ContainerTodo;