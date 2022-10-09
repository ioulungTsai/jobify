import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BIGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BIGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
} from "./actions"

import { initialSate } from "./appContext"

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    }
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    }
  }

  if (action.type === SETUP_USER_BIGIN) {
    return {
      ...state,
      isLoadin: true,
    }
  }

  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoadin: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    }
  }

  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoadin: false,

      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    }
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    }
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialSate,
      user: null,
      token: null,
      jobLocation: "",
      userLocation: "",
    }
  }

  if (action.type === UPDATE_USER_BIGIN) {
    return {
      ...state,
      isLoadin: true,
    }
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoadin: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
    }
  }

  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoadin: false,

      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    }
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    }
  }

  if (action.type === CLEAR_VALUES) {
    const initialSate = {
      isEditing: false,
      editJobId: "",
      position: "",
      company: "",
      jobLocation: state.userLocation,
      jobType: "full-time",
      status: "pending",
    }

    return {
      ...state,
      ...initialSate,
    }
  }

  if (action.type === CREATE_JOB_BEGIN) {
    return {
      ...state,
      isLoadin: true,
    }
  }

  if (action.type === CREATE_JOB_SUCCESS) {
    return {
      ...state,
      isLoadin: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Job Created!",
    }
  }

  if (action.type === CREATE_JOB_ERROR) {
    return {
      ...state,
      isLoadin: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    }
  }

  throw Error(`no such action : ${action.type}`)
}

export default reducer
