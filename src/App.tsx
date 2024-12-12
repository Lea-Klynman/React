import { createContext, Dispatch, useReducer, } from 'react'

import './App.css'
import HomePage from './components/HomePage'
import User from './Types/User'
type action = {
  type: string;
  data: User
}
const userReducer = (state: User, action: action) => {
  
  switch (action.type) {
    
    case 'Log in':
      state.name = state.name != action.data.name ? action.data.name : state.name;
      state.email = state.email != action.data.email ? action.data.email : state.email;
      return state
    case 'Update':
      state.name = action.data.name ?? state.name;
      state.lastName = action.data.lastName ?? state.lastName;
      state.address = action.data.address ?? state.address;
      state.email = action.data.address ?? state.email;
      state.numberPhone = action.data.numberPhone ?? state.numberPhone;
      state.password = action.data.password ?? state.password;
      return state
    default:
      return state

  }
}
type UserContextType = [User, Dispatch<action>];

// Update the context definition
export const userCotext = createContext<UserContextType>([{} as User, () => {}]);
function App() {
const [user,userDispatch] = useReducer(userReducer,{} as User)
  return (
    <>
    <userCotext.Provider value={[user,userDispatch]} >
    <HomePage />
    </userCotext.Provider>
      
    </>
  )
}

export default App
