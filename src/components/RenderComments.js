import React from 'react'
import Comment from './Comment'
import uuid from 'uuid'

const RenderComments = ({ task }) => {
   const sortComments = () => task.comments.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1)

   const renderComments = () => sortComments().map((comment) =>
      <li
         key={uuid()}
         className="list__item">
         <Comment

            {...task}
            comment={comment}
         />
      </li>
   )

   return (
      renderComments().length > 0 ? renderComments() : <p className="text">No comments</p>
   )
}

export default RenderComments