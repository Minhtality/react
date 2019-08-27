import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      ///Replace with DB soon
      // {
      //   id: uuid.v4(),
      //   title: 'Take me out',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Take him out',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Take her out',
      //   completed: false
      // }
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
  //Add todo
  AddTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="innerContainer">
            {/* Home Route */}
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo AddTodo={this.AddTodo} />
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            {/* About Route */}
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>

    );
  }
}
//need to migrate nav bar to header compnent
export default App;
