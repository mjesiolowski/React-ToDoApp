import React from 'react';
import { NavLink } from 'react-router-dom'
import HomePage from './HomePage'

const Header = () => {

   return (
      <>
         <NavLink to="/"><h1>ToDoList App</h1></NavLink>
      </>
   )
}

export default Header