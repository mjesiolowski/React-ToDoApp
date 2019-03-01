import React, { Component } from 'react';
import './App.css';
import Input from './Input'
import TasksList from './TasksList'


class App extends Component {
  state = {
    value: '',
    alert: false,
    duplicate: false,
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

  //adding task handlers

  handleAddButton = () => {
    const tasks = [...this.state.tasks]
    const duplicateCheck = tasks.filter(task => task.text === this.state.value).length

    if (this.state.value.length <= 2) {
      this.setState({
        alert: !this.state.alert
      })
    }

    else if (duplicateCheck) {
      this.setState({
        duplicate: !this.state.duplicate
      })
    }
    else {
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
  }

  // changing task status handlers
  handleDoneTask = id => {
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

  handleRemovedTask = id => {
    console.log('ok', id)
    const tasks = [...this.state.tasks]
    const tasksAfterRemoval = tasks.filter((task) => {
      if (task.id !== id) {
        return task
      } return null
    })

    this.setState({
      tasks: tasksAfterRemoval,
    })
  }

  //searching handlers
  handleSearchedTask = () => {
    const tasks = [...this.state.tasks]

    if (this.state.value.length) {
      const searchResult = tasks.filter((result) => result.text.toLowerCase().includes(this.state.value.trim().toLowerCase()) && result.active
      )

      this.setState({
        value: '',
        search: true,
        searchedTasks: [...searchResult]
      })
    }
  }

  handleReturn = () => {
    this.setState({
      search: false,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.alert && this.state.value.length > 2) {
      this.setState({
        alert: !this.state.alert,
      })
    }
    else if (prevState.value !== this.state.value) {
      this.setState({
        duplicate: false
      })
    }
  }

  render() {
    return (
      <div className="App">

        <div className="input">
          <Input value={this.state.value} input={this.handleInputValue} add={this.handleAddButton} submit={this.handleSubmit} alert={this.state.alert} search={this.handleSearchedTask} duplicate={this.state.duplicate} />
        </div>

        <div className="result">
          <TasksList tasksToDo={this.state.tasks} doneTask={this.handleDoneTask} searchStatus={this.state.search} searchedTasks={this.state.searchedTasks} returnHandler={this.handleReturn} removedTask={this.handleRemovedTask} />
        </div>

      </div>
    );
  }
}

export default App;
