import React from 'react';


const TasksToDo = props => {
   const { task, id, done, removed, index } = props
   return (
      <>
         <li className="tasksToDo__item">
            {index + 1}. {task}
            {task.length > 15 && <br></br>}
            <i id={id} className="fas fa-check tasksToDo__icon" onClick={() => done(id)}></i>
            <i id={id} className="fas fa-trash tasksToDo__icon" onClick={() => removed(id)}></i>
         </li>
      </>
   );
};


export default TasksToDo;

