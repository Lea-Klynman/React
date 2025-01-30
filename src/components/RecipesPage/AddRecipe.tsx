;
import { AppDispatch } from "./store/store";
import { array, object, string } from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Checkbox, IconButton, TextField } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Add, Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import RecipeType from "../../Types/RecipeType";
import { addRecipe } from "./recipesSlice";



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
        <button onClick={onSubmit(e)} >add recipe</button>
    </>)
}
} 

export default AddRecipe