import React from "react";

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            item: ""
        };
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value 
        });
    }

    submitItem = event => {
        event.preventDefault();
        event.target.reset(); // Resets value to blank
        this.props.addItem(this.state.item); // addItem function located in App.js
    }

    render(){
        return(
            
            <form className="form" onSubmit={this.submitItem}>
                <input
                    className="inputField"
                    type="text"
                    value={this.item}
                    name="item"
                    onChange={this.handleChanges}
                />

                <button className="addBtn">Add</button>

                {/* <button className="clearBtn"
                    onClick={}>Clear Completed</button> */}
            </form>
 
        );
    }
}

export default TodoForm;