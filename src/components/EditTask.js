import React, { useState } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import uuid from 'uuid'
import EditComments from './EditComments'

const EditTask = ({ task }) => {

   const [taskName, setTaskName] = useState(task.name)
   const [taskPriority, setTaskPriority] = useState(task.isPriority)

   // const renderComments = () => task.comments.map((comment) =>
   //    <li key={comment.id}>
   //       <label>{comment.text}</label>
   //       <input type="text" />
   //       <p>{moment(comment.createdAt).format('DD-MM-YYYY')}</ p>
   //    </li>
   // )
   console.log(task.comments)
   const renderComments = () => task.comments.map((comment) =>
      <EditComments
         key={uuid()}
         comment={comment}
      />)

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
         <p>Created at: {moment(task.createdAt).format('DD-MM-YYYY')}</p>
         <ul>
            Comments:
         {renderComments()}
         </ul>
      </div>
   )
}

const mapStateToProps = (state, props) => ({
   task: state.tasks.find(({ id }) => id === props.match.params.id)
})

export default connect(mapStateToProps)(EditTask)