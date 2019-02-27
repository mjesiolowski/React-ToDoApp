import React from 'react';


const DoneTasks = props => {
   const { task } = props

   return (
      <li>{task}</li>
   );
}

export default DoneTasks;