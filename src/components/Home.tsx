import RecipeImage from "./RecipesPage/RecipeImage";
import {  Container } from "@mui/material";
import { Grid2 as Grid } from '@mui/material';

const Home = () => {
    return (
        <>
        <Container>
            <h1> Hi</h1>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                <Grid  size={{ xs: 12, sm: 6 }}>
                    <RecipeImage imgItem={{
                        img: "fish.jpg",
                        title: "Spicy Chinese-Style Fish",
                        author: "Chef Roni Levi",
                        link: "/ShoeRecipe/recipes/5"
                    }} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <RecipeImage imgItem={{
                        img: "pasta.jpg",
                        title: "Pasta",
                        author: "Chef Maya Barak",
                        link: "/ShoeRecipe/recipes/1"
                    }} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <RecipeImage imgItem={{
                        img: "Black.jpg",
                        title: "Black Forest Cake",
                        author: "Chef Kreen Goren",
                        link: "/ShoeRecipe/recipes/6"
                    }} />
                   
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <RecipeImage imgItem={{
                        img: "boi.webp",
                        title: "Stuffed Cabbage",
                        author: "Chef Daniel Shapira",
                        link: "/ShoeRecipe/recipes/4"
                    }} />
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
export default Home