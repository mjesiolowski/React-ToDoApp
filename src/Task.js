import React from 'react';


const Task = props => {
   const { task, id, remove } = props

   return (
      <ul>
         <li>{task} <i id={id} className="fas fa-check" onClick={() => remove(id)}></i></li>
      </ul>
   );
}

export default Task;