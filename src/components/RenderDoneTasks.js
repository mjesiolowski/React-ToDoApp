import React from 'react'
import { connect } from 'react-redux'
import DoneTaskItem from './DoneTaskItem'

const RenderDoneTasks = ({ tasks }) => {

   const renderTasks = () => tasks.map(task =>
      <li className="tasks__item tasks__item--done list__item" key={task.id}><DoneTaskItem {...task} /></li>)

   return (
      <section className="doneTasks tasks">
         <ul className="list">
            <h2 className="title__sub">Completed (last 5):</h2>
            {renderTasks()}
         </ul>
      </section>
   )
}

const mapStateToProps = (state) => ({
   tasks: state.tasks
      .filter(({ completed }) => completed === true)
      .sort((a, b) => a.completedAt > b.completedAt ? -1 : 1)
      .slice(0, 5)
})

export default connect(mapStateToProps)(RenderDoneTasks)