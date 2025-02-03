import { createContext, Dispatch, useReducer, } from 'react'
import './App.css'
import User from './Types/User'
import {  RouterProvider } from 'react-router'
import { router } from './router'
import { Provider } from 'react-redux'
import store from './components/RecipesPage/store'
import { ThemeProvider } from '@mui/material/styles'
import theme from './components/Them'
import { action, UserReducer } from './components/UserPages/UserReducer'
type UserContextType = [User, Dispatch<action>];

export const UserContext = createContext<UserContextType>([{} as User, () => {}]);
function App() {
const [user,userDispatch] = useReducer(UserReducer,{} as User)
  return (
    
    <>
   <ThemeProvider theme={theme}>
    <UserContext value={[user,userDispatch]} >
    <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
        </UserContext>
        </ThemeProvider>
      
    </>
  )
}

export default App

