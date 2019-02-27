import React from 'react';


const TasksToDo = props => {
   const { task, id, remove } = props

   return (
      <>
         <li>{task} <i id={id} className="fas fa-check" onClick={() => remove(id)}></i></li>
      </>
   );
}

export default TasksToDo;