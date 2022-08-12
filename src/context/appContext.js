import React, { useState, useContext } from 'react';
import { DISPLAY_ALERT } from './actions';
import reducer from "./reducer"
import { CLEAR_ALERT } from './actions';
const AppContext = React.createContext();

export const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
  }

  
  
  const AppProvider = ({ children }) => {
    let [state,dispatch]=React.useReducer(reducer,initialState)    
    function displayalert(){
      dispatch({type:DISPLAY_ALERT})
      clearalert()
    }

    function clearalert(){
    setTimeout(() => {
        dispatch({type:CLEAR_ALERT})
      }, 3000);
      }

  return (
    <AppContext.Provider
      value={
      {
        ...state,
        displayalert,
        clearalert
      }
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };


