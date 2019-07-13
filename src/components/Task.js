import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeTask, doneTask } from '../actions/tasks'
import moment from 'moment'

const Task = ({ name, id, isPriority, deadline, dispatch }) => {
   const dateFormat = "DD.MM.YYYY"

   const handleRemoveTask = () => {
      dispatch(removeTask(id))
   }

   const handleDoneTask = () => {
      dispatch(doneTask(id))
   }

   return (
      <>
         <NavLink to={'/edit/' + id}>{name}</NavLink>
         {isPriority && <p><i className="fas fa-medal"></i></p>}
         <button onClick={handleRemoveTask}><i className="fas fa-trash-alt"></i></button>
         <button onClick={handleDoneTask}><i className="fas fa-check"></i></button>
         <p>Deadline: {moment(deadline).format(dateFormat)}</p>
      </>
   )
}

export default connect()(Task)