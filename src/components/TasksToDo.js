import React from 'react';


const TasksToDo = props => {
   const { task, id, done, removed, index } = props

   return (
      <>
         <li className="tasksList tasksToDo__item">
            {index + 1}. {task}
            <i id={id} className="fas fa-check tasksList tasksToDo__icon" onClick={() => done(id)}></i>
            <i id={id} className="fas fa-trash tasksList tasksToDo__icon" onClick={() => removed(id)}></i>
         </li>
      </>
   );
};


export default TasksToDo;

