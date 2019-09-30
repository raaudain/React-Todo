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
        event.target.reset(); // Reset value to blank
        this.props.addItem(this.state.item);
    }

    // removeItem = element => {
    //     element.preventDefault();
    //     this.props.clearCompleted(this.state.item);
    // }



    render(){
        return(
            
            <form onSubmit={this.submitItem}>
                <input
                    type="text"
                    value={this.item}
                    name="item"
                    onChange={this.handleChanges}
                    
                />

                <button>Add</button>

                {/* <button className="clearBtn"
                    onClick={}>Clear Completed</button> */}
            </form>

            
            
        );
    }
}

export default TodoForm;