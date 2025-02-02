import { useParams } from "react-router";
import RecipeImage from "./RecipesPage/RecipeImage";

const Home=()=>{
    return (<>
    <h1> Hi</h1>
    
    <RecipeImage imgItem={{
                img: "fish.jpg",
                title: "Meat and fish",
                author: "lali",
                link:"/ShoeRecipe"
            }}/> 
            <RecipeImage imgItem={{
                img: "pasta.jpg",
                title: "pasta",
                author: "lali",
                link:"/ShoeRecipe"
            }}/><RecipeImage imgItem={{
              img: "cake.jpg",
              title: "cake",
              author: "lali",
              link:"/ShoeRecipe"
          }}/><RecipeImage imgItem={{
            img: "choux.jpg",
            title: "choux",
            author: "lali",
            link:"/ShoeRecipe"
        }}/></>)
}
export default Home