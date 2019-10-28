import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css"


const todosData =[
  {
    name: "Go to grocery store",
    id: 1234,
    completed: false
  }
]

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      todos: todosData
    };
  }

  // Toggles item as TRUE or FALSE when clicked.
  toggleItem = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === id){
          console.log(!item.completed) // Shows value item should be once clicked.
          return{
            ...item,  // Spread operator flattens array
            completed: !item.completed // If the "id is equal, change the value from false to true"
          };
        }
        else{
          return item;
        }
      })
    });
  }

  addItem = itemName => {
    // Creates new item
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem] // Adds new item to the end of the Todos array.

    })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => item.completed === false) // Looking for uncompleted tasks
    })
  }

  render() {
    return (
      <div className="container">
        <h2>Gotta-do List</h2>
        <TodoForm 
          addItem={this.addItem} 
        />
      
      <TodoList
        todos={this.state.todos}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
      />
      </div>
    );
  }

}

export default App;
