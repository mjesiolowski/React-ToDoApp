import React from 'react'
import { NavLink } from 'react-router-dom'

const DoneTaskItem = ({ name, id }) => {
   return (
      <NavLink className="tasks__link link" to={'/done/' + id}>{name}</NavLink>

   )
}

export default DoneTaskItem