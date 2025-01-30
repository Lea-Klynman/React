import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppDispatch, RootStore } from "./store";
import RecipeType from "../../Types/RecipeType";
import { useEffect } from "react";
import { fetchRecipes } from "./recipesSlice";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Box, Card, CardContent, CircularProgress, Container, List, ListItem, Typography } from "@mui/material";
const RecipeInstruction =()=>{
    const {id} = useParams();
    const dispatch = useDispatch<AppDispatch>()
    const recipesList = useSelector((state: RootStore) => state.recipes.recipes)
    const loading = useSelector((state: RootStore) => state.recipes.loading)
    useEffect(() => { dispatch(fetchRecipes()); }, [dispatch,loading]);
    
    let recipe : RecipeType|undefined 
    if(id)
     recipe = recipesList.find(r => r.id === parseInt(id));
    else{
        recipe = recipesList.find(r => r.id === 0);
    }
    return (<>
    <Container maxWidth="md" sx={{ mt: 4 }}>
            {!recipe ? (
                <CircularProgress />
            ) : (
                <>
                    <Typography variant="h4" component="h1" gutterBottom sx={{ backgroundColor: '#579fba', padding: 2, borderRadius: 1, color: "#FFFFFF"}}>
                        {recipe.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                        Author ID: {recipe.authorId}
                    </Typography>
                    <Box sx={{ backgroundColor: '#579fba', padding: 2, borderRadius: 1, mt: 2,color: "#FFFFFF" }}>
                        <Typography variant="h6" gutterBottom>
                            Ingredients:
                        </Typography>
                    </Box>
                    <List>
                        {recipe.ingredients.map((ingredient, index) => (
                            <ListItem key={index} color="textSecondary">
                                <RestaurantMenuIcon sx={{ mr: 1 ,color:"#ED3D48"}} /> {ingredient}
                            </ListItem>
                        ))}
                    </List>
                    <Box sx={{ backgroundColor: '#579fba', padding: 2, borderRadius: 1, mt: 2,color: "#FFFFFF" }}>
                        <Typography variant="h6" gutterBottom>
                            Instructions:
                        </Typography>
                    </Box>
                    <Typography variant="body1">{recipe.instructions}</Typography>
                </>
            )}
        </Container>

    </>)
}
export  default  RecipeInstruction