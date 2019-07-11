import React from 'react';
import { NavLink } from 'react-router-dom'
import moment from 'moment'

const Task = ({ name, id, isPriority, deadline }) => {
   const dateFormat = "DD.MM.YYYY"

   return (
      <>
         <NavLink to={'/edit/' + id}>{name}</NavLink>
         {isPriority && <p>High priority!</p>}
         <p>Deadline: {moment(deadline).format(dateFormat)}</p>
      </>
   )
}

export default Task