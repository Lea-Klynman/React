import RecipeImage from "./RecipesPage/RecipeImage";
import {  Container, Typography } from "@mui/material";
import { Grid2 as Grid } from '@mui/material';

const Home = () => {
    return (
        <>
        <Container sx={{ overflowX: 'hidden', maxWidth: '100vw' }}>
        <Typography 
                variant="h5" 
                align="left" 
                color="#ED3D48" 
                sx={{ fontWeight: 'bold', mt: 4, mb: 4 }} >
                Welcome to LallyRecipes - Discover Your Next Favorite Dish!
            </Typography>            <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ overflowX: 'hidden', width: '100%' }}>
                <Grid  size={{ xs: 12, sm: 6 }}>
                    <RecipeImage imgItem={{
                        img: "fish.jpg",
                        title: "Spicy Chinese-Style Fish",
                        author: "Chef Roni Levi",
                        link: "/ShowRecipe/recipes/5"
                    }} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <RecipeImage imgItem={{
                        img: "pasta.jpg",
                        title: "Pasta",
                        author: "Chef Maya Barak",
                        link: "/ShowRecipe/recipes/1"
                    }} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <RecipeImage imgItem={{
                        img: "Black.jpg",
                        title: "Black Forest Cake",
                        author: "Chef Kreen Goren",
                        link: "/ShowRecipe/recipes/6"
                    }} />
                   
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <RecipeImage imgItem={{
                        img: "boi.webp",
                        title: "Stuffed Cabbage",
                        author: "Chef Daniel Shapira",
                        link: "/ShowRecipe/recipes/4"
                    }} />
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
export default Home