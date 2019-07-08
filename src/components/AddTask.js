import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addTask } from '../actions/tasks'
import { lengthAlert, duplicateAlert } from '../actions/alerts'

const AddTask = ({ dispatch, alerts, tasks }) => {
   const [taskName, setTaskName] = useState("")
   const [taskPriority, setTaskPriority] = useState("")

   const validateInput = (taskName, addTask) => {
      const isDuplicated = tasks.find(task => task.name === taskName.trim())

      if (taskName.length < 3) { dispatch(lengthAlert(true)) }
      else if (isDuplicated) { dispatch(duplicateAlert(true)) }
      else {
         addTask()
         dispatch(lengthAlert(false))
         dispatch(duplicateAlert(false))
         setTaskName("")
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      const action = () => dispatch(addTask({ name: taskName, isPriority: taskPriority }))

      validateInput(taskName, action)
   }

   return (
      <>
         <h2>AddTask</h2>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Add task"
               value={taskName}
               onChange={(e) => setTaskName(e.target.value)}
            />

            <label htmlFor="priority">Priority:</label>
            <select
               id="priority"
               value={taskPriority}
               onChange={(e) => setTaskPriority(e.target.value)}
            >
               <option value="true">Important</option>
               <option value="false">Not important</option>
            </select>
            {alerts.duplicateAlert && <p>Task already on the to do list</p>}
            {alerts.lengthAlert && <p>Minimum 3 characters required</p>}
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