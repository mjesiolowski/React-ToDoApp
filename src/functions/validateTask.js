import moment from 'moment'

export const validateTask = (tasks, { taskName, taskDate, dateFormat }) => {
   const isTooShort = taskName.length < 3
   const isDuplicated = tasks.find(task => task.name === taskName.trim())
   const isDateInvalid = typeof dateFormat === 'boolean' ? true : !moment(taskDate, dateFormat, true).isValid();

   if (isTooShort) return 'lengthAlert'
   else if (isDuplicated) return 'duplicateAlert'
   else if (isDateInvalid) return 'dateAlert'
   else return 'taskValidated'
}