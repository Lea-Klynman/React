import { useParams } from "react-router";
import RecipeImage from "./RecipesPage/RecipeImage";

const Home=()=>{
    return (<>
    <h1> Hi</h1>
    
    <RecipeImage imgItem={{
                img: "back.jpg",
                title: "piza",
                author: "lali",
                link:"/ShoeRecipe"
            }}/> </>)
}
export default Home