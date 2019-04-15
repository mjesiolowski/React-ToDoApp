import React, { Component } from 'react';
import Header from './Header'
import TasksList from './TasksList'
import uuid from 'uuid'


class App extends Component {
  state = {
    editedInputValue: '',
    headerInputValue: '',
    minimalTaskLengthAlert: false,
    searchSectionActive: false,
    searchedTasks: [],
    taskDuplicatedAlert: false,
    tasks: [
      {
        id: uuid(),
        text: "Task 1",
        active: true,
        edited: false,
      },
      {
        id: uuid(),
        text: "Task 2",
        active: true,
        edited: false,
      },
      {
        id: uuid(),
        text: "Task 3",
        active: true,
        edited: false,
      },
    ],
  }

  //INPUT HANDLERS

  handleHeaderInputValue = e => {
    this.setState({
      headerInputValue: e.target.value
    })
  }

  handleHeaderInputSubmit = e => {
    e.preventDefault()
    this.handleAddTaskButton()
  }

  handleEditInputValue = e => {
    this.setState(({
      editedInputValue: e.target.value
    }))
  }

  //ADDING TASK
  // handleAddTaskButton = () => {
  //   const tasksToDo = [...this.state.tasks]
  //   const duplicateCheck = tasksToDo.filter(task => task.text === this.state.headerInputValue && task.active).length

  //   if (this.state.headerInputValue.length <= 2) {
  //     this.setState({
  //       minimalTaskLengthAlert: true
  //     })
  //   }

  //   else if (duplicateCheck) {
  //     this.setState({
  //       taskDuplicatedAlert: true
  //     })
  //   }
  //   else {
  //     tasksToDo.push(
  //       {
  //         id: uuid(),
  //         text: this.state.headerInputValue,
  //         active: true,
  //         edited: false,
  //       }
  //     )
  //     this.setState({
  //       tasks: tasksToDo,
  //       headerInputValue: ''
  //     })
  //   }
  // }

  //CHANGING TASK STATUS
  handleDoneTaskButton = id => {
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

  //EDITING TASK
  handleEditButton = (id, task) => {
    if (!this.state.editedInputValue) {
      this.setState({
        editedInputValue: task
      })

      const tasks = [...this.state.tasks]
      tasks.forEach(task => {
        if (task.id === id) {
          task.edited = !task.edited
        }
      })
      this.setState({
        tasks,
      })
    }
  }

  handleEditingTask = (e, id) => {
    e.preventDefault()
    const tasks = [...this.state.tasks]

    if (this.state.editedInputValue.length < 3) { alert('Task too short') }
    else {
      tasks.map(task => {
        if (task.id === id) {
          task.text = this.state.editedInputValue
          task.edited = false
        } return null
      })

      this.setState(() => ({
        editedInputValue: '',
        tasks,
      }))
    }
  }

  //REMOVING TASK
  handleRemoveTaskButton = id => {
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

  //SEARCHING TASK
  handleSearchTaskButton = () => {
    const tasks = [...this.state.tasks]

    if (this.state.headerInputValue.length) {
      const searchResult = tasks.filter((result) => result.text.toLowerCase().includes(this.state.headerInputValue.trim().toLowerCase()) && result.active
      )

      this.setState({
        headerInputValue: '',
        searchSectionActive: true,
        searchedTasks: [...searchResult]
      })
    }
  }

  handleReturnButton = () => {
    this.setState({
      searchSectionActive: false,
    })
  }

  //ALERT HANDLERS

  componentDidUpdate(prevProps, prevState) {
    if (this.state.minimalTaskLengthAlert && this.state.headerInputValue.length > 2) {
      this.setState({
        minimalTaskLengthAlert: false
      })
    }
    else if (prevState.headerInputValue !== this.state.headerInputValue) {
      this.setState({
        taskDuplicatedAlert: false
      })
    }
  }

  //RENDERING

  render() {
    return (
      <div className="App">

        <header className="header">
          <Header
            alert={this.state.minimalTaskLengthAlert}
            duplicate={this.state.taskDuplicatedAlert}
            value={this.state.headerInputValue}

            handleAddTaskButton={this.handleAddTaskButton}
            handleHeaderInputSubmit={this.handleHeaderInputSubmit}
            handleHeaderInputValue={this.handleHeaderInputValue}
            handleSearchTaskButton={this.handleSearchTaskButton}
          />
        </header>

        <main className="tasksList">
          <TasksList
            editedValue={this.state.editedInputValue}
            searchSection={this.state.searchSectionActive}
            searchedTasks={this.state.searchedTasks}
            tasksToDo={this.state.tasks}

            handleEditButton={this.handleEditButton}
            handleEditInputValue={this.handleEditInputValue}
            handleEditingTask={this.handleEditingTask}
            handleDoneTaskButton={this.handleDoneTaskButton}
            handleReturnButton={this.handleReturnButton}
            handleRemoveTaskButton={this.handleRemoveTaskButton}
          />
        </main>

      </div>
    );
  }
}

export default App;
