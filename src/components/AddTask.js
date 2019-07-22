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
   const [taskDeadline, setTaskDeadline] = useState(moment().format(dateFormat))

   const task = {
      taskName,
      taskDeadline,
      dateFormat
   }

   const handleAddTask = (e, dateFormat) => {
      e.preventDefault()
      const addTaskAction = () => dispatch(addTask({
         name: taskName,
         isPriority: taskPriority,
         deadline: moment(taskDeadline, dateFormat).valueOf()
      }))

      const isTaskValid = handleAlerts(validateTask({ ...task }, tasks), dispatch)
      if (isTaskValid) {
         addTaskAction()
         setTaskName("")
      }
   }

   return (
      <section className="addTask">
         <h2 className="title__sub addTask__title">AddTask</h2>
         <form
            onSubmit={(e) => handleAddTask(e, dateFormat)}
            className='form'
         >
            <input
               type="text"
               placeholder="Add task"
               value={taskName}
               onChange={(e) => setTaskName(e.target.value)}
               className='form__input'
            />

            <input
               value={taskDeadline}
               onChange={(e) => setTaskDeadline(e.target.value)}
               className='form__input'
            />

            <div className="form__wrapper">
               <label
                  htmlFor="priority"
                  className='form__label'
               >Priority: </label>

               <select
                  id="priority"
                  value={taskPriority}
                  onChange={(e) => setTaskPriority(e.target.value === "true" ? true : false)}
                  className='form__select'
               >
                  <option value="false">Not important</option>
                  <option value="true">Important</option>

               </select>
            </div>

            {alerts.duplicateAlert && <p className='addTask__alert text'>Task already on the to do list</p>}
            {alerts.lengthAlert && <p className='addTask__alert text'>Minimum 3 characters required</p>}
            {alerts.dateAlert && <p className='addTask__alert text'>Your deadline date must not be set in the past. Date fromat: DD.MM.YYYY
               </p>}
            <button className='addTask__button button'><i className="fas fa-plus-circle"></i></button>
         </form>
      </section>
   )
}

const mapStateToProps = ({ tasks, alerts }) => ({
   tasks,
   alerts
})

export default connect(mapStateToProps)(AddTask)