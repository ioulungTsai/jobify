import React, {useReducer, useContext} from "react";
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

  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export {AppProvider, initialSate, useAppContext}