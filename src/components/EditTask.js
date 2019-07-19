import React, { useState } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import AddComment from './AddComment'
import RenderComments from './RenderComments'
import { editTask, removeTask } from '../actions/tasks'
import { validateTask } from '../functions/validateTask'
import { handleAlerts } from '../functions/handleAlerts'

const EditTask = ({ tasks, task, alerts, history, dispatch }) => {

   const dateFormat = "DD.MM.YYYY"

   const [taskName, setTaskName] = useState(task.name)
   const [taskPriority, setTaskPriority] = useState(task.isPriority)
   const [taskDeadline, setTaskDeadline] = useState(moment(task.deadline).format(dateFormat))

   const updatedTask = {
      taskId: task.id,
      taskName,
      taskDeadline,
      dateFormat
   }



   const handleRemoveTask = () => {
      dispatch(removeTask(task.id))
      history.push('/')
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      handleEditTask()
   }

   const handleUpdateTask = () => {

      const editTaskAction = () =>
         dispatch(editTask(task.id, {
            ...task,
            name: taskName,
            isPriority: taskPriority,
            deadline: moment(taskDeadline, dateFormat).valueOf()
         }))

      const isTaskValid = handleAlerts(validateTask({ ...updatedTask }, tasks), dispatch)

      if (isTaskValid) {
         editTaskAction()
         history.push('/')
      }
   }

   return (
      <section className="task">
         <div className="container">
            <h1 className="title__sub">{task.name}</h1>
            <p className="task__text text">Created at: {moment(task.createdAt).format(dateFormat)}</p>
            <form
               onSubmit={handleSubmit}
               className="form"
            >
               <input
                  type="text"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  className="form__input"
               />

               <div className="form__wrapper">
                  <label
                     htmlFor="priority"
                     className='form__label'
                  >Priority:</label>

                  <select
                     id="priority"
                     value={taskPriority}
                     onChange={(e) => setTaskPriority(e.target.value)}
                     className='form__select'
                  >
                     <option value="true">Important</option>
                     <option value="false">Not important</option>
                  </select>
               </div>

               <div className="form__wrapper">
                  <label
                     htmlFor="deadline"
                     className='form__label'
                  >Deadline: </label>

                  <input
                     id="deadline"
                     value={taskDeadline}
                     onChange={(e) => setTaskDeadline(e.target.value)}
                     className='form__select'
                  />
               </div>

            </form>


         </div>

         <div>
            {alerts.duplicateAlert && <p className="text">Task already on the to do list</p>}
            {alerts.lengthAlert && <p className="text">Minimum 3 characters required</p>}
            {alerts.dateAlert && <p className="text">Your deadline date must not be set in the past. Date fromat: DD.MM.YYYY
               </p>}
         </div>

         <div className="task__buttons">
            <button
               className="task__button button"
               onClick={handleRemoveTask}>
               Remove task!</button>
            <button
               className="task__button button"
               onClick={handleUpdateTask}>
               Update task!</button>
         </div>

         <div className="comments">
            <AddComment taskId={task.id} />

            <ul className="list">
               <h2 className="title__sub">
                  Comments:
               </h2>

               <RenderComments task={task} />
            </ul>
         </div>


      </section>
   )
}

const mapStateToProps = (state, props) => ({
   tasks: state.tasks,
   alerts: state.alerts,
   task: state.tasks.find(({ id }) => id === props.match.params.id)
})

export default connect(mapStateToProps)(EditTask)