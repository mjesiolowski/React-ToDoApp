import React from 'react';
import Task from './Task'


const Result = props => {
   const { tasks, remove } = props
   const oneTask = tasks.map(task => <Task key={task.id} task={task.text} id={task.id} remove={remove} />)

   return (
      <>
         {tasks.length > 0 ? oneTask : <h2>No tasks on list!</h2>}
      </>
   );
}

export default Result;

