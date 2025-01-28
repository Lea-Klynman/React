import { useDispatch, useSelector } from "react-redux"
import AddRecipe from "./AddRecipe"
import { AppDispatch, RootStore } from "./store"
import { useEffect } from "react"
import { fetchRecipes } from "./recipesSlice"

export default () => {
    const dispatch = useDispatch<AppDispatch>()
    const recipesList = useSelector((state: RootStore) => state.recipes.recipes)
    useEffect(() => { dispatch(fetchRecipes()); }, [dispatch])
    return (<>
        {recipesList.map(r => <div key={r.id}>{r.title}</div>)}
        
    </>)
}