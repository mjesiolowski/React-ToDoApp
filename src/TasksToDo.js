import React from 'react';


const TasksToDo = props => {
   const { task, id, done, removed } = props

   return (
      <>
         <li>
            {task}
            <i id={id} className="fas fa-check" onClick={() => done(id)}></i>
            <i id={id} className="fas fa-trash" onClick={() => removed(id)}></i>
         </li>
      </>
   );
}

export default TasksToDo;