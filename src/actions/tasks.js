import uuid from 'uuid'
import moment from 'moment'

export const addTask = (
   name = "default task",
   active = true,
   createdAt = moment().valueOf(),
   isPriority = false,
   comments = []
) => ({
   type: "ADD_TASK",
   task: {
      id: uuid(),
      name: name.trim(),
      active,
      createdAt,
      isPriority,
      comments
   }
})

export const editTask = (id, update) => ({
   type: "EDIT_TASK",
   id,
   update,
})

export const removeTask = (id) => ({
   type: "REMOVE_TASK",
   id
})

export const doneTask = (id) => ({
   type: "DONE_TASK",
   id
})

export const addComment = (id, text) => ({
   type: "ADD_COMMENT",
   id,
   comment: {
      id: uuid(),
      text,
      createdAt: moment().valueOf(),
      beingEdited: false
   }
})

export const editComment = (id, update) => ({
   type: "EDIT_COMMENT",
   id,
   update,
})

export const deleteComment = (taskId, commentId) => ({
   type: "DELETE_COMMENT",
   taskId,
   commentId
})