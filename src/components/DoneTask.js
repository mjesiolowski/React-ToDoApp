import React from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import RenderComments from './RenderComments'


export const DoneTask = ({ task }) => {
   const dateFormat = "DD.MM.YYYY"


   return (
      <section className="task">
         <div className="container">
            <h1 className="title__sub">{task.name}</h1>
            <p className="task__text text">Created at: {moment(task.createdAt).format(dateFormat)}</p>
            <p className="task__text text">Completed at: {moment(task.completedAt).format(dateFormat)}</p>
         </div>

         <div className="comments">
            <ul className="list">
               <h2 className="title__sub">
                  Comments:
               </h2>
               <RenderComments task={task} />
            </ul>
         </div>

      </section>
   )
}

const mapStateToProps = (state, props) => {
   return {
      task: state.tasks.find(({ id }) => id === props.match.params.id)
   }
}


export default connect(mapStateToProps)(DoneTask)