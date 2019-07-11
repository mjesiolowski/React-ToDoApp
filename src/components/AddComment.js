import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/tasks'

const AddComment = ({ dispatch, taskId }) => {

   const [inputValue, setInputValue] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(addComment(taskId, inputValue))
      setInputValue("")
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text" />
         <button>Add comment</button>
      </form>

   )
}


export default connect()(AddComment)