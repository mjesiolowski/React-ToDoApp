import React from 'react'
import { NavLink } from 'react-router-dom'

export const DoneTaskItem = ({ name, id }) => {
   return (
      <NavLink className="tasks__link tasks__link--done link" to={'/done/' + id}>{name}</NavLink>

   )
}

export default DoneTaskItem