import React, { useState } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import AddComment from './AddComment'
import RenderComments from './RenderComments'
import { lengthAlert, duplicateAlert, dateAlert } from '../actions/alerts'
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

   const handleReturnButton = () => {
      history.push('/')
      dispatch(lengthAlert(false))
      dispatch(duplicateAlert(false))
      dispatch(dateAlert(false))
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
         <button onClick={handleReturnButton}>Home page</button>
         <div className="taskDetails">
            <h1>{task.name}</h1>
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)} />

               <label htmlFor="priority">Priority:</label>
               <select
                  id="priority"
                  value={taskPriority}
                  onChange={(e) => setTaskPriority(e.target.value)}
               >
                  <option value="true">Important</option>
                  <option value="false">Not important</option>
               </select>
            </form>
            <p>Created at: {moment(task.createdAt).format(dateFormat)}</p>
            <label htmlFor="deadline">Deadline: </label>
            <input
               id="deadline"
               value={taskDeadline}
               onChange={(e) => setTaskDeadline(e.target.value)}
            />
         </div>

         <div className="alerts">
            {alerts.duplicateAlert && <p>Task already on the to do list</p>}
            {alerts.lengthAlert && <p>Minimum 3 characters required</p>}
            {alerts.dateAlert && <p>Your deadline date must not be set in the past. Date fromat: DD.MM.YYYY
               </p>}
         </div>

         <div className="taskActions">
            <button onClick={handleRemoveTask}>Remove task!</button>
            <button onClick={handleUpdateTask}>Update task!</button>
         </div>

         <div className="comments">
            <AddComment taskId={task.id} />

            <ul>
               Comments:
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