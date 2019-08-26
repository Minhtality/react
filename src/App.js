import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take me out',
        completed: false
      },
      {
        id: 2,
        title: 'Take him out',
        completed: false
      },
      {
        id: 3,
        title: 'Take her out',
        completed: false
      }
    ]
  }

  //State Change Toggle 
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }
  //Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => (todo.id !== id))]
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <div className="container">
            <h1 className="logo">
              <a href="#home">
                <img
                  src="http://minhtality.me/img/rocket1.029ea0d7.gif"
                  alt=""
                />
              </a>
            </h1>
            <ul className="nav">
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#more">More</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Where Work Begings */}
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}
//need to migrate nav bar to header compnent
export default App;
