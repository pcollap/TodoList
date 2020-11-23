import './App.css';
import { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import {v4 as uuid} from 'uuid';


class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: uuid(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    // console.log('From App JS');
    console.log(id);
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        console.log(todo.title)
        console.log('Before: ' + todo.completed)
        todo.completed = !todo.completed
        console.log('After: ' + todo.completed)
      }
      return todo;
    }) });
  }

  //Delete Todo
  delTodo = (id) => {
    console.log('APP Deleting todo with id ' + id)
    //The ... (called the spread operator) lets you expand an iterable like a string, object or array into its elements 
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  //Add Todo
  addTodo = (title) => {
    console.log('APP Add todo with title ' + title)
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    // console.log(this.state.todos)
    return (
    <div className="App"> 
      <div className="container">
      <Header/>
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo} 
      /> 
      </div>   
    </div>
  );
  }
  
}

export default App;
