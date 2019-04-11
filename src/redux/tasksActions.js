import uuid from 'uuid'

export const addTask = (
   text = "default task",
   active = true,
   edited = false
) => ({
   type: "ADD_TASK",
   task: {
      id: uuid(),
      text,
      active,
      edited
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