import { createBrowserRouter } from 'react-router'
import About from './components/About'
import Home from './components/Home'
import ShoeRecipe from './components/ShoeRecipe'
import AppLayout from './components/AppLayout'
import RecipeInstruction from './components/RecipesPage/RecipeInstruction'
import NoRecipe from './components/RecipesPage/NoRecipe'
import AddRecipe from './components/RecipesPage/AddRecipe'
import SuccessedAdding from './components/RecipesPage/successedAdding'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
          { path: '', element: <Home/> },
            { path: 'home', element: <Home/> },
            { 
                path: 'ShoeRecipe', 
                element: <ShoeRecipe/>,
                children: [
                    { path: '', element: <NoRecipe/> },
                    { path: 'recipes/:id', element: <RecipeInstruction/> },
                    { path: 'Add/:id', element: <AddRecipe/> },
                    { path: 'successedAdding', element: <SuccessedAdding/> }
                ]
            },
            { path: 'about', element: <About/> }
        ]
    }
])