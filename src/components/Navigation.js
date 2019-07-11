import React, { useState } from 'react';
import { connect } from 'react-redux'
import { setTextFilter, setSortBy } from '../actions/filters'

const Navigation = ({ dispatch }) => {
   const [filteredText, handleFilteredText] = useState("")
   const [sortBy, handleSortBy] = useState('name')

   const dispatchFilteredText = (e) => {
      handleFilteredText(e.target.value)
      dispatch(setTextFilter(e.target.value))
   }

   const dispatchSortBy = (e) => {
      handleSortBy(e.target.value)
      dispatch(setSortBy(e.target.value))
   }

   return (
      <div>
         <input
            value={filteredText}
            onChange={(e) => dispatchFilteredText(e)}
            placeholder="Search task" />

         <label htmlFor='sortTasks'>Sort tasks by:</label>

         <select
            id='sortTasks'
            value={sortBy}
            onChange={(e) => dispatchSortBy(e)}
         >
            <option value="name">Name</option>
            <option value="createdAt">Created at</option>
            <option value="deadline">Deadline</option>
         </select>

      </div>
   )
}

export default connect()(Navigation)