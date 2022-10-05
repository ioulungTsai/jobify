import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BIGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR
} from "./actions"

const reducer = (state, action) => {
  if(action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!'
    }
  }

  if(action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: ''
    }
  }

  if(action.type === SETUP_USER_BIGIN) {
    return {
      ...state,
      isLoadin: true
    }
  }

  if(action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoadin: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    }
  }

  if(action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoadin: false,

      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  throw Error(`no such action : ${action.type}` )
}

export default reducer
