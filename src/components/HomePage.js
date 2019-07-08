import React from 'react';
import Navigation from '../components/Navigation'
import TasksList from './TasksList'
import DoneTasksList from './DoneTasksList'
import AddTask from './AddTask'

const HomePage = () => (
  <div>
    <Navigation />
    <AddTask />
    <TasksList />
    <DoneTasksList />
  </div>
);

export default HomePage;
