import { createContext, Dispatch, useReducer, } from 'react'
import axios, { AxiosError } from "axios"
import './App.css'
import User from './Types/User'

import {  RouterProvider } from 'react-router'
import { router } from './router'
import { Provider } from 'react-redux'
import store from './components/RecipesPage/store'
import { ThemeProvider } from '@mui/material/styles'
import theme from './components/Them'
type action = {
  type: string;
  data: User
}
const url='http://localhost:3000/api/user';
const userReducer = (state: User, action: action) => {
   
  switch (action.type) {
    case 'Register':
     return {...state, ...action.data}
    case 'Log in':
      return {...state, ...action.data}
    case 'Update':
      return {...state, ...action.data}
      case 'user':
        return {...state, ...action.data}
      
      
    default:
      return state
    }
  }

type UserContextType = [User, Dispatch<action>];

// Update the context definition
export const userContext = createContext<UserContextType>([{} as User, () => {}]);
function App() {
const [user,userDispatch] = useReducer(userReducer,{} as User)
  return (
    
    <>
   <ThemeProvider theme={theme}>
    <userContext.Provider value={[user,userDispatch]} >
    <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
        </userContext.Provider>
        </ThemeProvider>
      
    </>
  )
}

export default App

