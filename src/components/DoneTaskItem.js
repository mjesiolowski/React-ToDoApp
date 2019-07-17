import React from 'react'
import { NavLink } from 'react-router-dom'

const DoneTaskItem = ({ name, id }) => {
   return (
      <NavLink className="tasks__link tasks__link--done link" to={'/done/' + id}>{name}</NavLink>

   )
}

export default DoneTaskItem