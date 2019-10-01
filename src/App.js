import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css"

const todosData =[
  {
    name: "Test",
    id: 1234,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: todosData
    };
  }

  toggleItem = id => {
    console.log(id);
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
      todos: this.state.todos.filter(item => item.completed === false) // Filtering out completed items
    })
  }



  // handleChanges = element => {
  //   this.setState({
  //       [element.target.name]: element.target.value
  //   });
  // }

  // submitItem = element => {
  //   element.preventDefault();
  //   this.props.addItem(this.state.item);
  // }

  render() {

    return (
      <div className="container">
        <h2>Gottado List</h2>
        <TodoForm addItem={this.addItem} 
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
