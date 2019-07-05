import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
   return (
      <div>
         <input type="text" />
         <NavLink to="/add">Add task</NavLink>
      </div>
   )
}

export default Navigation