import React, { useState } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import { editComment } from '../actions/tasks'

const Comment = ({ comment, dispatch, id, active }) => {

   const [commentText, setCommentText] = useState(comment.text)

   const handleClick = () => {
      dispatch(editComment(id, { ...comment, beingEdited: true, }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(editComment(id,
         {
            ...comment,
            beingEdited: false,
            text: commentText
         }))
   }

   return (
      <li>
         {comment.beingEdited ?
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
               />
            </form>

            :

            <>
               <p>{commentText}</p>
               {active && <button onClick={handleClick}> Edit comment </button>}
            </>}

         <p>{moment(comment.createdAt).format('DD-MM-YYYY')}</ p>
      </li>

   )
}

export default connect()(Comment)