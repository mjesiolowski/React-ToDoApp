import React from 'react';
import { NavLink } from 'react-router-dom'
import moment from 'moment'

const Task = ({ name, id, createdAt, dueDate }) => {
   const dateFormat = "DD.MM.YYYY"

   return (
      <>
         <NavLink to={'/edit/' + id}>{name}</NavLink>
         <p>Created at: {moment(createdAt).format(dateFormat)}</p>
         <p>Deadline: {moment(dueDate).format(dateFormat)}</p>
      </>
   )
}

export default Task