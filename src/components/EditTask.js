import React, { useState } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import AddComment from './AddComment'
import RenderComments from './RenderComments'
import { lengthAlert, duplicateAlert, dateAlert } from '../actions/alerts'
import { editTask } from '../actions/tasks'
import { validateTask } from '../functions/validateTask'
import { handleAlerts } from '../functions/handleAlerts'

const EditTask = ({ tasks, task, alerts, history, dispatch }) => {
   const dateFormat = "DD.MM.YYYY"

   const [taskName, setTaskName] = useState(task.name)
   const [taskPriority, setTaskPriority] = useState(task.isPriority)

   const updatedTask = {
      taskName,
      taskPriority,
   }

   const handleReturnButton = () => {
      history.push('/')
      dispatch(lengthAlert(false))
      dispatch(duplicateAlert(false))
      dispatch(dateAlert(false))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      handleEditTask()
   }

   const handleEditTask = () => {

      const editTaskAction = () =>
         dispatch(editTask(task.id, {
            ...task,
            name: taskName,
            isPriority: taskPriority
         }))

      const isTaskValid = handleAlerts(validateTask({ ...updatedTask }, tasks), dispatch)

      if (isTaskValid) {
         editTaskAction()
         history.push('/')
      }

   }

   return (
      <div>
         <button onClick={handleReturnButton}>Home page</button>
         <h2>{task.name}</h2>
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
         <p>Id: {task.id}</p>
         <p>Created at: {moment(task.createdAt).format(dateFormat)}</p>
         {alerts.duplicateAlert && <p>Task already on the to do list</p>}
         {alerts.lengthAlert && <p>Minimum 3 characters required</p>}
         <button onClick={handleEditTask}>Update task!</button>

         <AddComment taskId={task.id} />

         <ul>
            Comments:
            <RenderComments task={task} />
         </ul>
      </div>
   )
}

const mapStateToProps = (state, props) => ({
   tasks: state.tasks,
   alerts: state.alerts,
   task: state.tasks.find(({ id }) => id === props.match.params.id)
})

export default connect(mapStateToProps)(EditTask)