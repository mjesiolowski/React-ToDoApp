import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { setTextFilter as setTextFilterAction, setSortBy as setSortByAction } from '../actions/filters'

export const Navigation = ({ dispatch }) => {
   const [filteredText, setFilteredText] = useState("")
   const [sortBy, setSortBy] = useState('createdAt')

   useEffect(() => {
      dispatchFilteredText("")
   }, [])

   const dispatchFilteredText = (value) => {
      setFilteredText(value)
      dispatch(setTextFilterAction(value.trim()))
   }

   const dispatchSortBy = (e) => {
      setSortBy(e.target.value)
      dispatch(setSortByAction(e.target.value))
   }

   return (
      <section className="navigation form">
         <div className="form__wrapper">
            <label
               htmlFor="searchTask"
               className='form__label'
            >Search task:</label>

            <input
               id="searchTask"
               value={filteredText}
               onChange={(e) => dispatchFilteredText(e.target.value)}
               placeholder="Search task"
               className="form__input"
            />
         </div>

         <div className="form__wrapper">
            <label
               htmlFor='sortTasks'
               className='form__label'
            >Sort by:</label>

            <select
               id='sortTasks'
               value={sortBy}
               onChange={(e) => dispatchSortBy(e)}
               className="form__select"
            >
               <option value="createdAt">Created at</option>
               <option value="name">Name</option>
               <option value="deadline">Deadline</option>
               <option value="priority">Priority</option>
            </select>
         </div>


      </section >
   )
}

export default connect()(Navigation)