import React from 'react';
import Navigation from '../components/Navigation'
import TasksList from './TasksList'
import DoneTasksList from './DoneTasksList'

const HomePage = () => (
  <div>
    Home page content
    <Navigation />
    <TasksList />
    <DoneTasksList />
  </div>
);

export default HomePage;
