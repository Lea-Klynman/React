import { createBrowserRouter, Outlet } from 'react-router'
import NavBar from './components/NavBar'

import About from './components/About'
import User from './components/User'
import Home from './components/Home'
import AppLayout from './components/AppLayout'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children : [
      {path: 'home', element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'user/:name', element: <User/>},
  
    ]
        
    }])

