import { useDispatch } from "react-redux"
import { addRecipe } from "./recipesSlice"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { array, object, string } from "yup"
import RecipeType from "../../Types/RecipeType"

const AddRecipe = () => {

    const dispatch = useDispatch()
    const schema = object({
        name: string().required(),
        phone: string().required().length(10,'must be 10'),
        title: string().required(),
        description: string().required(),
        ingredients: array(string()).required(),
        instructions: string().required()
    
    }).required()

    const HookForm = ({ addToList }: { addToList: Function }) => {
        const {
            formState: { errors },
            register,
            watch,
            handleSubmit,
            reset,
        } = useForm({ resolver: yupResolver(schema) })
    
        console.log(watch("name"))
    
        const onSubmit = (data: RecipeType) => {
            dispatch(addRecipe(data));
            reset()
        }
    return (<>
        <button onClick={() => }>add recipe</button>
    </>)
}
} 

export default AddRecipe