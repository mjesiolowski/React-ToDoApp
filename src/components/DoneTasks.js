import React from 'react';


const DoneTasks = props => {
   const { task } = props

   return (
      <li className="doneTasks__item">{task}</li>
   );
}

export default DoneTasks;