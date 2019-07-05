import React from 'react';
import { connect } from 'react-redux'

const EditTask = ({ task }) => {

   return (
      <>
         <p>{task.name}</p>
         <p>{task.id}</p>
      </>
   )
}

const mapStateToProps = (state, props) => ({
   task: state.tasks.find(({ id }) => id === props.match.params.id)
})

export default connect(mapStateToProps)(EditTask)