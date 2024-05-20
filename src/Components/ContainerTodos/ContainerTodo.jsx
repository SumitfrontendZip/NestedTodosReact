import { useEffect, useState } from 'react';
import TodoList from '../Showtodos/TodoList'
import './ContainerTodo.css'

function ContainerTodo({ items, classUpdate = false }) {

    let itemUpdate = items;
    function removeItem(idToRemove) {
        const indexToRemove = items.findIndex((e) => {
            return e.id === idToRemove;
        });

        if (indexToRemove !== -1) {
            // Remove the item from the items array
            items.splice(indexToRemove, 1);
            console.log("Item removed successfully");
        } else {
            console.log("Item not found");
        }
    }

    useEffect(()=>{

    },[])

    function handlemargin(styleMargin) {
        return (
            <div id="ContainerTodos" style={styleMargin}>
                {
                    items.map((item) => (
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
