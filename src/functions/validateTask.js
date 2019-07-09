import moment from 'moment'

export const validateTask = ({ taskName, taskDate },tasks, dateFormat) => {
   const isTooShort = taskName.length < 3
   const isDuplicated = tasks.find(task => task.name === taskName.trim())
   // const isDateInvalid = dateFormat ? !moment(taskDate, dateFormat, true).isValid() : false



   const isDateInvalid = moment(taskDate, dateFormat).isValid() ? moment().isAfter(moment(taskDate, dateFormat), 'day') : true

   if (isTooShort) return 'lengthAlert'
   else if (isDuplicated) return 'duplicateAlert'
   else if (isDateInvalid) return 'dateAlert'
   else return 'taskValidated'
}