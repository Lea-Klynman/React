import { createContext, Dispatch, useReducer, } from 'react'
import axios, { AxiosError } from "axios"
import './App.css'
import LogIn from './components/logIn'
import User from './Types/User'
import { Stack } from '@mui/material'
import { data, RouterProvider } from 'react-router'
import { router } from './router'
type action = {
  type: string;
  data: User
}
const url='http://localhost:3000/api/user';
const userReducer = async (state: User, action: action) => {
  
  switch (action.type) {
    case 'Register':
      try {
            
        const res = await axios.post(//1
            url +  '/register',
            {//2 + 3
                email: action.data?.email,
                password: action.data?.password 
               
            },
            // { headers: { 'user-id': userID + '' } } //only in update
        )

        state.userId=res.data.userId;//5
        state.name = "res"; 
        state.password != action.data?.password ;
       state.email != action.data?.email ;

    } catch (e) {
        alert(e);
        //axios: //4
        if (e.status === 422)
            alert('user is already login')

    } finally {
        return state;
    }
    case 'Log in':
      try {
            
        const res = await axios.post(//1
            url + '/login',
            {//2 + 3
                email: action.data?.email,
                password: action.data?.password 
               
            },
            // { headers: { 'user-id': userID + '' } } //only in update
        )

        state.userId=res.data.userId;//5
        state.name = "res"; 
        state.password != action.data?.password ;
       state.email != action.data?.email ;

    } catch (e) {
        alert(e);
        //axios: //4
        if (e.status === 401)
            alert('user is already login')

    } finally {
        return state;
    }
       
    case 'Update':
      try{
        state.userId= action.data?.userId
        state.name = action.data.name ?? state.name;
      state.lastName = action.data.lastName ?? state.lastName;
      state.address = action.data.address ?? state.address;
      state.email = action.data.address ?? state.email;
      state.numberPhone = action.data.numberPhone ?? state.numberPhone;
        const res = await axios.post(//1
          url,
          state,
          {
            headers: {
              'user-id': `${action.data.userId}`
            }      });
          }
      catch (e) {
        alert("error");
        
      }
      finally
      {
        return state;
      }
      
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
        <RouterProvider router={router} />
       
    </userCotext.Provider>
      
    </>
  )
}

export default App
