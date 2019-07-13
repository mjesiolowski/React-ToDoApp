import React from 'react'
import { connect } from 'react-redux'
import DoneTaskItem from './DoneTaskItem'

const RenderDoneTasks = ({ tasks }) => {

   const renderTasks = () => tasks.map(task =>
      <li key={task.id}><DoneTaskItem {...task} /></li>)

   return (
      <div className="doneTasks">
         <ul>
            <h2>Completed tasks (last 5):</h2>
            {renderTasks()}
         </ul>
      </div>
   )
}

const mapStateToProps = (state) => ({
   tasks: state.tasks
      .filter(({ completed }) => completed === true)
      .sort((a, b) => a.completedAt > b.completedAt ? -1 : 1)
      .slice(0, 5)
})

export default connect(mapStateToProps)(RenderDoneTasks)