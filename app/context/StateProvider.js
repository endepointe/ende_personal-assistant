import { useReducer, useContext, createContext } from 'react'

const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, session, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState, session)}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateValue = () => useContext(StateContext);