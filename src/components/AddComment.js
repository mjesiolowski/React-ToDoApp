import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/tasks'
import { commentAlert as commentAlertAction } from '../actions/alerts'

export const AddComment = ({ addComment, commentAlertAction, taskId, commentAlert }) => {

   const [commentValue, setCommentValue] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault()
      if (commentValue.length > 0) {
         addComment(taskId, commentValue)
         commentAlertAction(false)
         setCommentValue("")
      }
      else {
         commentAlertAction(true)
      }
   }

   return (
      <form
         onSubmit={handleSubmit}
         className="form"
      >
         <input
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
            type="text"
            placeholder="Add comment"
            className="form__input" />

         <button className="task__button button">Add comment</button>

         {commentAlert && <p className='text'>Minimum length of 1 character required</p>}
      </form>

   )
}

const mapDispatchToProps = (dispatch) => ({
   addComment: (taskId, commentValue) => dispatch(addComment(taskId, commentValue)),
   commentAlertAction: (isTrue) => dispatch(commentAlertAction(isTrue))
}
)
const mapStateToProps = ({ alerts }) => {
   return {
      commentAlert: alerts.commentAlert
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment)