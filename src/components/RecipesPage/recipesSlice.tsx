import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import RecipeType from '../../Types/RecipeType';
import { RootStore } from './store';
import Alert from '@mui/material/Alert';

export const fetchRecipes = createAsyncThunk('recipes/fetch', async (_, thunkApi) => {
    try {
        const response = await axios.get('http://localhost:3000/api/recipes');
        return response.data as RecipeType[];
    }
    catch (error) {
        if (error instanceof Error) {
            <Alert severity="error">{error.message}</Alert>
        }
        return thunkApi.rejectWithValue(error);
    }
})

export const fetchAddRecipe = createAsyncThunk('recipes/add', async ({recipe,userId}: { recipe: RecipeType; userId: number }, thunkApi) => {
    try {        
        const res = await axios.post("http://localhost:3000/api/recipes", recipe, { headers: { 'user-id': userId  } });
        return res.data as RecipeType;
    } catch (error) {
        if (error instanceof Error) {
            <Alert severity="error">{error.message}</Alert>
        }
        return thunkApi.rejectWithValue('An unknown error occurred');
    }
});
export const deleteRecipe = createAsyncThunk(
    'recipes/delete',
    async ({ recipeId, userId }: { recipeId: number; userId: number }, thunkApi) => {
        try {
            await axios.delete('http://localhost:3000/api/recipes', {
                headers: { 'user-id': userId },
                data: { id: recipeId }
            });
            return recipeId;
        } catch (error) {
            if (error instanceof Error) {
                <Alert severity="error">{error.message}</Alert>
            }
            return thunkApi.rejectWithValue('Failed to delete recipe');
        }
    }
);
const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [] as RecipeType[],
        loading: false,
        error: null as string | null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.fulfilled, (state, action: PayloadAction<RecipeType[]>) => {
                 state.recipes = [...action.payload];
            }).addCase(fetchRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to load recipes";
            }).addCase(fetchRecipes.pending, (state) => {
                state.loading = true;
                state.error = null;
            }).addCase(fetchAddRecipe.fulfilled, (state, action: PayloadAction<RecipeType>) => {
                state.recipes.push(action.payload);
                state.loading = false;
            }
            ).addCase(fetchAddRecipe.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to load recipes";
            }).addCase(fetchAddRecipe.pending, (state) => {
                state.loading = true;
                state.error = null;
            }).addCase(deleteRecipe.fulfilled, (state, action: PayloadAction<number>) => {
                state.recipes = state.recipes.filter(recipe => recipe.id !== action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(deleteRecipe.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to delete recipe";
            })
            .addCase(deleteRecipe.pending, (state) => {
                state.loading = true;
                state.error = null;
            });
    },
});
export const selectRecipes = (state:RootStore)=>state.recipes;
export const { } = recipesSlice.actions;
export default recipesSlice;