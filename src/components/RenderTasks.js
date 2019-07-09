import React from 'react';
import { connect } from 'react-redux'
import Task from './Task'

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
   tasks: state.tasks.filter(({ active }) => active === true)
})

export default connect(mapStateToProps)(RenderTasks)