import React from 'react';


const SearchedTasks = props => {
   const { task } = props

   return (
      <li className="searchedTasks__item">{task}</li>
   );
}

export default SearchedTasks;