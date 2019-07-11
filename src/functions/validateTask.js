import moment from 'moment'

export const validateTask = ({ taskId, taskName, taskDeadline, dateFormat }, tasks) => {
   const isTooShort = taskName.length < 3
   const isDuplicated = tasks.find(task => task.name.toLowerCase() === taskName.trim().toLowerCase() && task.id !== taskId)
   const isDateInvalid = moment(taskDeadline, dateFormat).isValid() ? moment().isAfter(moment(taskDeadline, dateFormat), 'day') : true

   if (isTooShort) return 'lengthAlert'
   else if (isDuplicated) return 'duplicateAlert'
   else if (isDateInvalid) return 'dateAlert'
   else return 'taskValidated'
}