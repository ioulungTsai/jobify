import React, {useReducer, useContext} from "react";
import { DISPLAY_ALERT } from "./actions";
import reducer from "./reducer";

const initialSate = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: ''
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialSate)

  const displayAlert = () => {
    dispatch({type:DISPLAY_ALERT})
  }

  return (
    <AppContext.Provider value={{ ...state, displayAlert}}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export {AppProvider, initialSate, useAppContext}