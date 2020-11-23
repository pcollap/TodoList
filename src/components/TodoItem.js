import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: 'grey',
            padding: '10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    // markComplete(e) {
    //     console.log('From Todo Item')
    //     console.log(this.props)
    // }

    //using props makes the call look higher up, otherwise looks in the current component
    markComplete = (e) => {
        console.log('From Todo Itemzzzz')
        // console.log(this.props.key)
        console.log(this.props.todo)
        // console.log(this.props.markComplete)

    }

    //Delete Todo
    delTodo = () => {
        console.log('TODOITEM Deleting todo with id')
    }


    render() {
        // const {id, title } = this.props.todo; //can use id instead of this.props.todo, called destructuring
        return (
            <div style={this.getStyle()}>
                <p>
                    {/* This requires you to use bind, to not used bind user arrow functions */}
                    {/* <input type="checkbox" onChange={this.markComplete.bind(this)} />
                        { this.props.todo.title } */}

                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} />
                        { this.props.todo.title }
                        <button onClick={this.props.delTodo.bind(this, this.props.todo.id)} style={btnStyle}>
                        X
                    </button>
                </p>  
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.array.isRequired
}

const btnStyle = {
    backgroundColor:'#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
