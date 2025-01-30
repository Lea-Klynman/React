import { createBrowserRouter, Outlet } from 'react-router'
import NavBar from './components/NavBar'

import About from './components/About'
import User from './components/User'
import Home from './components/Home'
import AppLayout from './components/AppLayout'
import RecipeInstruction from './components/RecipesPage/RecipeInstruction'
import NoRecipe from './components/RecipesPage/NoRecipe'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children : [
      {path: 'home', element: <Home/>,children: [{path:'', element:<NoRecipe/>}
        ,{path: 'recipes/:id', element: <RecipeInstruction/>}]},
      {path: 'about', element: <About/>},
      {path: 'user/:name', element: <User/>},
  
    ]
        
    }])

