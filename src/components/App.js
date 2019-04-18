import React, { Component } from 'react';
import Header from './Header'
import TasksList from './TasksList'

class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="header">
          <Header />
        </header>

        <main className="tasksList">
          <TasksList />
        </main>

      </div>
    );
  }
}

export default App;
