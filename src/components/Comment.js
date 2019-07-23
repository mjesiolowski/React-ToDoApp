import React, { useState } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import { editComment, deleteComment } from '../actions/tasks'

export const Comment = ({ editComment, deleteComment, comment, id: taskId, completed }) => {

   const [commentText, setCommentText] = useState(comment.text)

   const handleEditComment = () => {
      editComment(taskId, { ...comment, beingEdited: true, })
   }


   const handleDeleteComment = () => {
      deleteComment(taskId, comment.id)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      commentText.length > 0 ?
         editComment(taskId,
            {
               ...comment,
               beingEdited: false,
               text: commentText
            })
         :
         editComment(taskId, { ...comment, beingEdited: false, })
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

const mapDispatchToProps = (dispatch) => ({
   editComment: (id, update) => dispatch(editComment(id, update)),
   deleteComment: (id, update) => dispatch(deleteComment(id, update))
})

export default connect(undefined, mapDispatchToProps)(Comment)