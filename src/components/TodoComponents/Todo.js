import React from "react"

const Todo = props => {
    //console.log(`item${props.item.completed}`)
    return(
        <div
            className={`item${props.item.completed ? "Completed" : ""}`}
            onClick={() => props.toggleItem(props.item.id)}
        >
            <p>{props.item.name}</p>
        </div>
    );
};

export default Todo;