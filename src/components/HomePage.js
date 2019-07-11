import React from 'react';
import Navigation from '../components/Navigation'
import RenderTasks from './RenderTasks'
import RenderDoneTasks from './RenderDoneTasks'
import AddTask from './AddTask'

const HomePage = () => (
  <main>
    <Navigation />
    <AddTask />
    <RenderTasks />
    <RenderDoneTasks />
  </main>
);

export default HomePage;
