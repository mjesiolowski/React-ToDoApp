import React from 'react';
import { connect } from 'react-redux'
import Task from './Task'
import { getFilteredTasks } from '../functions/getFilteredTasks'

const RenderTasks = ({ tasks }) => {
   const renderTasks = () => tasks.map(task =>
      <li key={task.id}><Task {...task} /></li>
   )

   return (
      <ul>
         <h2>Tasks to do:</h2>
         {renderTasks()}
      </ul>
   )
}

const mapStateToProps = (state) => ({
   tasks: getFilteredTasks(state.tasks, state.filters)
})

export default connect(mapStateToProps)(RenderTasks)