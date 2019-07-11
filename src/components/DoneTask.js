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
      <div>
         <button onClick={handleReturnButton}>Home page</button>
         <h2>{task.name}</h2>
         <p>Created at: {moment(task.createdAt).format(dateFormat)}</p>

         <ul>
            Comments:
            <RenderComments task={task} />
         </ul>
      </div>
   )
}

const mapStateToProps = (state, props) => {
   return {
      task: state.tasks.find(({ id }) => id === props.match.params.id)
   }
}


export default connect(mapStateToProps)(DoneTask)