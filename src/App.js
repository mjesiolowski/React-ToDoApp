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

  handleAdd = e => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="input">
          <Input value={this.state.value} add={this.handleAdd} />
        </div>
        <div className="result">
          <Result tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
