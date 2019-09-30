// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm"


// Getting props from App.js
const TodoList = props => {
    return(
        <div className="todolist">
            {props.todos.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            
            <button className="clearBtn" 
            onClick={props.clearCompleted}>
            Clear Completed</button>
            
        </div>
    )
}

export default TodoList;