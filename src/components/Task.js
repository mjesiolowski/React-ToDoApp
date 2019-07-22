import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeTask, doneTask } from '../actions/tasks'
import { lengthAlert, duplicateAlert, dateAlert } from '../actions/alerts'
import moment from 'moment'

const Task = ({ name, id, isPriority, deadline, dispatch }) => {
   const dateFormat = "DD.MM.YYYY"

   const handleRemoveTask = () => {
      dispatch(removeTask(id))
   }

   const handleDoneTask = () => {
      dispatch(doneTask(id))
   }

   const handleNavigation = () => {
      dispatch(lengthAlert(false))
      dispatch(duplicateAlert(false))
      dispatch(dateAlert(false))
   }


   return (
      <>
         <NavLink
            className='tasks__link link'
            to={'/edit/' + id}
            onClick={handleNavigation}
         >
            {name} {isPriority === true && <i className="fas fa-medal"></i>}
         </NavLink>

         <p className="tasks__deadline text">Deadline: {moment(deadline).format(dateFormat)}</p>

         <button
            onClick={handleRemoveTask}
            className="button"
         ><i className="fas fa-trash-alt"></i>
         </button>

         <button
            onClick={handleDoneTask}
            className="button"
         ><i className="fas fa-check"></i>
         </button>


         <NavLink
            className='button'
            to={'/edit/' + id}> <i className="fas fa-pencil-alt"></i>
         </NavLink>
      </>
   )
}

export default connect()(Task)