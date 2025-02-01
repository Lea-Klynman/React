import { useDispatch } from "react-redux";
import { array, object, string } from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Checkbox, IconButton, TextField } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Add, Delete } from "@mui/icons-material";
import RecipeType from "../../Types/RecipeType";
import { AppDispatch } from "./store";
import { useContext } from "react";
import { userContext } from "../../App";
import { fetchAddRecipe, fetchRecipes } from "./recipesSlice";
import { useNavigate, useParams } from "react-router";

const styles = {
    form: {
      fontFamily: "'Assistant', sans-serif", // כאן תוכל לשים את הפונט שלך
      direction: "rtl", // חשוב להוסיף כדי שהתצוגה תהיה מימין לשמאל
    },
  };
// סכמת yup עבור המתכון
const schema = object({
    title: string().required("Title is required"),
    description: string().required("Description is required"),
    ingredients: array().of(string().required("Each ingredient is required")).min(1, "At least one ingredient is required").required("Ingredients are required"),
    instructions: string().required("Instructions are required"),
}).required();

interface FormValues {
    title: string;
    description: string;
    ingredients: string[];
    instructions: string;
}

const AddRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        control,
        formState: { errors },
        register,
        handleSubmit,
        reset
    } = useForm<FormValues>({
        defaultValues: {
            title: '',
            description: '',
            ingredients: [],
            instructions: ''
        },
        resolver: yupResolver(schema)
    });
    
    const { fields, append, remove } = useFieldArray({
        control,
        name: "ingredients"
    });
    console.log(errors);
    const dispatchFetch = useDispatch<AppDispatch>();
    const onSubmit = async (data: FormValues) => {
        console.log("try to submit", data);
        const recipe: RecipeType = {
            title: data.title,
            description: data.description,
            ingredients: data.ingredients,
            instructions: data.instructions,
            id: 0,
            authorId: parseInt(id!)
        };
        dispatchFetch(fetchAddRecipe({ recipe, userId:parseInt(id!)}));
        dispatchFetch(fetchRecipes());
        reset();
        navigate('/ShoeRecipe/successedAdding');
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "500px", margin: "auto", padding: "20px" ,direction:"rtl"}}>
            <h2 style={{ textAlign: "center" }}>הוספת מתכון</h2>
            <TextField
                label="שם המתכון"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("title")}
                error={!!errors.title}
                helperText={errors.title?.message}
            />
            <TextField
                label="תאור"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
                multiline
                rows={4}
            />
            <h3>מצרכים:</h3>
            {fields.map((field, index) => (
                <Box key={field.id} display="flex" alignItems="center" gap={1} mb={1}>
                    <TextField
                        {...register(`ingredients.${index}` as const)} // השתמש בטיפוס הנכון כאן
                        variant="outlined"
                        fullWidth
                        error={!!errors.ingredients?.[index]}
                        helperText={errors.ingredients?.[index]?.message}
                    />

                    <IconButton onClick={() => remove(index)} color="error">
                        <Delete />
                    </IconButton>
                </Box>
            ))}

            <Button
                variant="contained"
                startIcon={<Add />}
                onClick={() => append("")} // הוסף מיתר ריק כערך ברירת מחדל
                sx={{ mb: 2 }}
            >
                הוסף מצרך
            </Button>


            <TextField
                label="הוראות הכנה"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("instructions")}
                error={!!errors.instructions}
                helperText={errors.instructions?.message}
                multiline
                rows={4}
            />
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="אני מאשר  קבלת פרסומים של מתכונים חדשים" />
            </FormGroup>
            <Button type="submit" variant="contained" color="primary" fullWidth>
                שלח מתכון
            </Button>
        </form>
    );
};

export default AddRecipe;
