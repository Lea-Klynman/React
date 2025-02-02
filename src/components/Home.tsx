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
                        title: "Meat and fish",
                        author: "lali",
                        link: "/ShoeRecipe"
                    }} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <RecipeImage imgItem={{
                        img: "pasta.jpg",
                        title: "pasta",
                        author: "lali",
                        link: "/ShoeRecipe"
                    }} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <RecipeImage imgItem={{
                        img: "meet.webp",
                        title: "cake",
                        author: "lali",
                        link: "/ShoeRecipe"
                    }} />
                   
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <RecipeImage imgItem={{
                        img: "boi.webp",
                        title: "cheesecake",
                        author: "lali",
                        link: "/ShoeRecipe"
                    }} />
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
export default Home