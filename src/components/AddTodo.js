import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    myOnSubmit = (e) => {
        e.preventDefault();
        //passing title up to App.js
        this.props.addTodo(this.state.title);
        //resetting this state to its default, clearing the fields
        this.setState({title: ''})
    }

    myOnChange = (e) => this.setState({ [e.target.name] : e.target.value});
    

    render() {
        return (
            <form onSubmit={this.myOnSubmit} style={{display: 'flex'}}>
                <input  
                    type="text" 
                    name="title"
                    style={{ flex: '10', padding: '5px'}} 
                    placeholder="Add Todo"
                    value={this.state.title}
                    onChange={this.myOnChange}
                />
                <input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddTodo
