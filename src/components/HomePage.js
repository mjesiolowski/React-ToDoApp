import React from 'react';
import Navigation from '../components/Navigation'
import RenderTasks from './RenderTasks'
import DoneTasksList from './DoneTasksList'
import AddTask from './AddTask'

const HomePage = () => (
  <div>
    <Navigation />
    <AddTask />
    <RenderTasks />
    <DoneTasksList />
  </div>
);

export default HomePage;
