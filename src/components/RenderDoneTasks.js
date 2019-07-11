import React from 'react'
import { connect } from 'react-redux'
import DoneTaskItem from './DoneTaskItem'

const RenderDoneTasks = ({ tasks }) => {

   const renderTasks = () => tasks.map(task =>
      <li key={task.id}><DoneTaskItem {...task} /></li>
   )

   return (
      <ul>
         <h2>DoneTasks:</h2>
         {renderTasks()}
      </ul>
   )
}

const mapStateToProps = (state) => ({
   tasks: state.tasks.filter(({ active }) => active === false)
})

export default connect(mapStateToProps)(RenderDoneTasks)