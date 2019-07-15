import React from 'react';
import { connect } from 'react-redux'
import Task from './Task'
import { getFilteredTasks } from '../functions/getFilteredTasks'

const RenderTasks = ({ tasks }) => {
   const renderTasks = () => tasks.map(task =>

      <li className="tasks__item list__item" key={task.id}><Task {...task} /></li>
   )

   return (
      <section className="tasksToDo tasks">
         <ul className="list">
            <h2 className="title__sub">Tasks to do:</h2>
            {renderTasks()}
         </ul>
      </section>
   )
}

const mapStateToProps = (state) => ({
   tasks: getFilteredTasks(state.tasks, state.filters)
})

export default connect(mapStateToProps)(RenderTasks)