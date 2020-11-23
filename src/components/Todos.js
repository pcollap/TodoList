import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    markComplete = () => {
        console.log('From Todos')
    }

    //Delete Todo
    delTodo = () => {
        console.log('TODO Deleting todo with id')
    }

    render() {
        //we are accessing the array of todos from state as props here in Todos.js
        // console.log(this.props.todos)    
        return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} 
                todo={todo} 
                markComplete={this.props.markComplete}  //THIS PRINTS 'From App JS'
                //markComplete={this.markComplete}/>        THIS PRINTS 'From Todos'
                delTodo={this.props.delTodo}/>
        ));
  }
  
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
