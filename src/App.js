import React, { Component } from 'react';
import './App.css';
import Input from './Input'
import Result from './Result'

class App extends Component {
  state = {
    value: '',
    tasks: [
      {
        id: 0,
        text: "Task 1",
        active: true,
      },
      {
        id: 1,
        text: "Task 2",
        active: true,
      },
      {
        id: 2,
        text: "Task 3",
        active: true,
      },
    ]
  }

  idValue = 3;

  handleInputValue = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleAddButton = () => {
    const tasks = [...this.state.tasks]
    tasks.push(
      {
        id: this.idValue,
        text: this.state.value,
        active: true,
      }
    )
    this.setState({
      tasks,
      value: ''
    })
    this.idValue++
  }

  handleSubmit = e => {
    e.preventDefault()
    this.handleAddButton()
  }

  handleRemoveTask = id => {
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)
    this.setState({
      tasks
    })
  }

  render() {
    return (
      <div className="App">
        <div className="input">
          <Input value={this.state.value} input={this.handleInputValue} add={this.handleAddButton} submit={this.handleSubmit} />
        </div>
        <div className="result">
          <Result tasks={this.state.tasks} remove={this.handleRemoveTask} />
        </div>
      </div>
    );
  }
}

export default App;
