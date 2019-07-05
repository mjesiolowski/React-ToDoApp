import React from 'react'
import { connect } from 'react-redux'
import DoneTask from './DoneTask'

const DoneTasksList = ({ tasks }) => {

   const renderTasks = () => tasks.map(task =>
      <li key={task.id}><DoneTask {...task} /></li>
   )

   return (
      <ul>
         <h2>DoneTasks</h2>
         {renderTasks()}
      </ul>
   )
}

const mapStateToProps = (state) => ({
   tasks: state.tasks.filter(({ active }) => active === false)
})

export default connect(mapStateToProps)(DoneTasksList)