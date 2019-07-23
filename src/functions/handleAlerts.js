import { lengthAlert, duplicateAlert, dateAlert } from '../actions/alerts'

export const handleAlerts = (output, dispatch) => {

   switch (output) {
      case 'lengthAlert':
         dispatch(lengthAlert(true))
         dispatch(duplicateAlert(false))
         dispatch(dateAlert(false))
         return false
      case 'duplicateAlert':
         dispatch(duplicateAlert(true))
         dispatch(lengthAlert(false))
         dispatch(dateAlert(false))
         return false
      case 'dateAlert':
         dispatch(dateAlert(true))
         dispatch(lengthAlert(false))
         dispatch(duplicateAlert(false))
         return false
      case 'taskValidated':
         dispatch(lengthAlert(false))
         dispatch(duplicateAlert(false))
         dispatch(dateAlert(false))
         return true
   }
}