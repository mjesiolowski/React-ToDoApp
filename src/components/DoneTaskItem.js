import React from 'react'
import { NavLink } from 'react-router-dom'

const DoneTaskItem = ({ name, id }) => {
   return (
      <NavLink to={'/done/' + id}>{name}</NavLink>

   )
}

export default DoneTaskItem