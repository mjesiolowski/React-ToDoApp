import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/tasks'
import { commentAlert as commentAlertAction } from '../actions/alerts'

const AddComment = ({ dispatch, taskId, commentAlert }) => {

   const [commentValue, setCommentValue] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault()
      if (commentValue.length > 0) {
         dispatch(addComment(taskId, commentValue))
         dispatch(commentAlertAction(false))
         setCommentValue("")
      }
      else {
         dispatch(commentAlertAction(true))
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

         {commentAlert && <p>Minimum length of 1 character required</p>}
      </form>

   )
}

const mapStateToProps = ({ alerts }) => {
   return {
      commentAlert: alerts.commentAlert
   }
}


export default connect(mapStateToProps)(AddComment)