import React from 'react';
import { NavLink } from 'react-router-dom'

const Task = ({ name, id }) => {
   return (
      <NavLink to={'/edit/' + id}>{name}</NavLink>

   )
}

export default Task