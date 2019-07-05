import React, { useState } from 'react';
import moment from 'moment'

const EditComments = ({ comment }) => {

   const [commentText, setCommentText] = useState(comment.text)

   const flag = true

   return (
      <li>
         {/* <label>{comment.text}</label> */}
         {flag ? <p>{commentText}</p> : <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
         />}
         <p>{moment(comment.createdAt).format('DD-MM-YYYY')}</ p>
      </li>

   )
}

export default EditComments