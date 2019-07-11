import React from 'react';
import { NavLink } from 'react-router-dom'
import HomePage from './HomePage'

const Header = () => {

   return (
      <header>
         <NavLink to="/"><h1>ToDoList App</h1></NavLink>
      </header>
   )
}

export default Header