import React from 'react';
import { NavLink } from 'react-router-dom'
import moment from 'moment'

const Task = ({ name, id, createdAt, deadline }) => {
   const dateFormat = "DD.MM.YYYY"

   return (
      <>
         <NavLink to={'/edit/' + id}>{name}</NavLink>
         <p>Created at: {moment(createdAt).format(dateFormat)}</p>
         <p>Deadline: {moment(deadline).format(dateFormat)}</p>
      </>
   )
}

export default Task