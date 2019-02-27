import React, { Component } from 'react';
import './App.css';
import Input from './Input'
import TasksList from './TasksList'

class App extends Component {
  state = {
    value: '',
    alert: false,
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
    ],
    search: false,
    searchedTasks: []
  }

  idValue = 3;

  //Input handlers

  handleInputValue = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.handleAddButton()
  }

  //Tasks handlers

  handleAddButton = () => {
    const tasks = [...this.state.tasks]

    if (this.state.value.length > 2) {
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
    else this.setState({
      alert: true
    })
  }

  handleRemoveTask = id => {
    const tasks = [...this.state.tasks]
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = !task.active
        task.time = new Date().getTime()
      }
    })
    this.setState({
      tasks,
    })
  }

  handleSearchTask = () => {
    // No result handler to be added
    const tasks = [...this.state.tasks]
    const searchResult = tasks.filter((result) => result.text.includes(this.state.value) && result.active
    )

    this.setState({
      value: '',
      search: true,
      searchedTasks: [...searchResult]
    })
  }

  handleReturn = () => {
    this.setState({
      search: false,
    })
  }

  componentDidUpdate() {
    if (this.state.alert && this.state.value.length > 2) {
      this.setState({
        alert: false,
      })
    }
  }

  render() {
    return (
      <div className="App">

        <div className="input">
          <Input value={this.state.value} input={this.handleInputValue} add={this.handleAddButton} submit={this.handleSubmit} alert={this.state.alert} search={this.handleSearchTask} />
        </div>

        <div className="result">
          <TasksList tasksToDo={this.state.tasks} removeTask={this.handleRemoveTask} searchStatus={this.state.search} searchedTasks={this.state.searchedTasks} returnHandler={this.handleReturn} />
        </div>

      </div>
    );
  }
}

export default App;
