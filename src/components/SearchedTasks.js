import React from 'react';


const SearchedTasks = props => {
   const { task } = props

   return (
      <li>{task}</li>
   );
}

export default SearchedTasks;