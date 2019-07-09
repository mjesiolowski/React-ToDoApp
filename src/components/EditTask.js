import React, { useState } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import AddComment from './AddComment'
import RenderComments from './RenderComments'
import { editTask } from '../actions/tasks'

const EditTask = ({ task, history, dispatch }) => {

   const [taskName, setTaskName] = useState(task.name)
   const [taskPriority, setTaskPriority] = useState(task.isPriority)

   const dateFormat = "DD.MM.YYYY"

   const updateTask = () => {
      dispatch(editTask(task.id, {
         ...task,
         name: taskName,
         isPriority: taskPriority
      }))
   }

   return (
      <div>
         <h2>{task.name}</h2>
         <form>
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
         <button onClick={updateTask}>Update task!</button>

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
   task: state.tasks.find(({ id }) => id === props.match.params.id)
})

export default connect(mapStateToProps)(EditTask)