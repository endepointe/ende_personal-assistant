import { useReducer, useContext, createContext } from 'react'

const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  // console.log('state count: ', state.count)
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateValue = () => useContext(StateContext);