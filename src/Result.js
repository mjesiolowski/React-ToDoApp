import React from 'react';
import Task from './Task'


const Result = props => {
   const { tasks } = props
   const oneTask = tasks.map(task => <Task key={task.id} task={task.text} />)

   return (
      <>
         {tasks.length > 0 ? oneTask : <h2>No tasks on list!</h2>}
      </>
   );
}

export default Result;

