import React, { useState } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import RenderComments from './RenderComments'


const DoneTask = ({ task, history }) => {
   const dateFormat = "DD.MM.YYYY"

   const handleReturnButton = () => {
      history.push('/')
   }


   return (
      <section className="doneTask">
         <button onClick={handleReturnButton}>Home page</button>
         <div className="taskDetails">
            <h1>{task.name}</h1>
            <p>Created at: {moment(task.createdAt).format(dateFormat)}</p>

         </div>

         <div className="comments">
            <ul>
               Comments:
            <RenderComments task={task} />
            </ul>
         </div>

      </section>
   )
}

const mapStateToProps = (state, props) => {
   return {
      task: state.tasks.find(({ id }) => id === props.match.params.id)
   }
}


export default connect(mapStateToProps)(DoneTask)