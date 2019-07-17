import React, { useState } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import { editComment, deleteComment } from '../actions/tasks'

const Comment = ({ comment, dispatch, id: taskId, completed }) => {

   const [commentText, setCommentText] = useState(comment.text)

   const handleEditComment = () => {
      dispatch(editComment(taskId, { ...comment, beingEdited: true, }))
   }


   const handleDeleteComment = () => {
      dispatch(deleteComment(taskId, comment.id))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(editComment(taskId,
         {
            ...comment,
            beingEdited: false,
            text: commentText
         }))
   }

   return (
      <>
         {comment.beingEdited ?
            <form
               onSubmit={handleSubmit}
               className="form"
            >
               <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="form__input"
               />
               <p className="text">{moment(comment.createdAt).format('DD-MM-YYYY')}</ p>
            </form>

            :

            <div className="task__comment">
               <p className="task__text text">{commentText}</p>
               <p className="task__text text">{moment(comment.createdAt).format('DD-MM-YYYY')}</ p>

               {!completed && <button
                  onClick={handleEditComment}
                  className="task__button button">Edit comment</button>}

               {!completed && <button
                  onClick={handleDeleteComment}
                  className="task__button button">Delete comment</button>}
            </div>
         }


      </>

   )
}

export default connect()(Comment)