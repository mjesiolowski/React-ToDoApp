import React from 'react';


const Task = props => {
   const { task } = props

   return (
      <ul>
         <li> {task}</li>
      </ul>
   );
}

export default Task;