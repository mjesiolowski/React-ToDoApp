import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addTask } from '../actions/tasks'
import moment from 'moment'
import { validateTask } from '../functions/validateTask'
import { handleAlerts } from '../functions/handleAlerts'

const AddTask = ({ dispatch, alerts, tasks }) => {
   const dateFormat = "DD.MM.YYYY"

   const [taskName, setTaskName] = useState("")
   const [taskPriority, setTaskPriority] = useState(false)
   const [taskDate, setTaskDate] = useState(moment().format(dateFormat))

   const task = {
      taskName,
      taskDate,
   }

   const handleSubmit = (e, dateFormat) => {
      e.preventDefault()
      const addTaskAction = () => dispatch(addTask({
         name: taskName,
         isPriority: taskPriority,
         dueDate: moment(taskDate, dateFormat).valueOf()
      }))

      const isTaskValid = handleAlerts(validateTask({ ...task }, tasks, dateFormat), dispatch)
      if (isTaskValid) {
         addTaskAction()
         setTaskName("")
      }
   }

   return (
      <>
         <h2>AddTask</h2>
         <form onSubmit={(e) => handleSubmit(e, dateFormat)}>
            <input
               type="text"
               placeholder="Add task"
               value={taskName}
               onChange={(e) => setTaskName(e.target.value)}
            />

            <input
               value={taskDate}
               onChange={(e) => setTaskDate(e.target.value)}
            />

            <label htmlFor="priority">Priority:</label>
            <select
               id="priority"
               value={taskPriority}
               onChange={(e) => setTaskPriority(e.target.value)}
            >
               <option value="false">Not important</option>
               <option value="true">Important</option>

            </select>
            {alerts.duplicateAlert && <p>Task already on the to do list</p>}
            {alerts.lengthAlert && <p>Minimum 3 characters required</p>}
            {alerts.dateAlert && <p>Your deadline date must not be set in the past. Date fromat: DD.MM.YYYY
               </p>}
            <button>Add task</button>
         </form>
      </>
   )
}

const mapStateToProps = ({ tasks, alerts }) => ({
   tasks,
   alerts
})

export default connect(mapStateToProps)(AddTask)