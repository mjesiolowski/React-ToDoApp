import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { lengthAlert, duplicateAlert, dateAlert } from '../actions/alerts'

const Header = ({ dispatch }) => {

   const handleReturnButton = () => {
      dispatch(lengthAlert(false))
      dispatch(duplicateAlert(false))
      dispatch(dateAlert(false))
   }

   return (
      <header className="header">
         <h1 onClick={handleReturnButton} className="title">   <NavLink to="/" className="link">Task App</NavLink></h1>

      </header>
   )
}

export default connect()(Header)