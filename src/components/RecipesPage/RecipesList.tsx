import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootStore } from "./store"
import { useContext, useEffect, useState } from "react"
import { deleteRecipe, fetchRecipes } from "./recipesSlice"
import { Link, useNavigate } from "react-router"
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddIcon from '@mui/icons-material/Add';import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Tooltip } from "@mui/material"
import { UserContext } from "../../App";
import DeleteIcon from '@mui/icons-material/Delete';


const drawerWidth = 240;
export default ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    const dispatch = useDispatch<AppDispatch>()
    const recipesList = useSelector((state: RootStore) => state.recipes.recipes)
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);
    const navigate = useNavigate();

    useEffect(() => { dispatch(fetchRecipes()); }, [dispatch])
    useEffect(()=>{},recipesList)
       const [user, ] = useContext(UserContext)
       const handleDeleteClick = (event: React.MouseEvent, recipeId: number) => {
        event.preventDefault(); 
        setSelectedRecipe(recipeId);
        setOpenDialog(true);
    };

    const handleDelete = async () => {
        if (selectedRecipe !== null && user.id) {
          try{
          await dispatch(deleteRecipe({ recipeId: selectedRecipe, userId: user.id })).unwrap();;
          await dispatch(fetchRecipes()).unwrap();
            setOpenDialog(false);
            setSelectedRecipe(null);
            navigate('/ShoeRecipe/deleteS');
        }
        catch(error){
            console.error('Failed to delete recipe:', error); }  }
    };

   return (
    <>  <Drawer
      sx={{ width: drawerWidth, flexShrink: 0,'& .MuiDrawer-paper': { width: drawerWidth },}}
      variant="persistent"
      anchor="right"
      open={open}
    >
     <Tooltip title="Close Recipies List" arrow>
      <IconButton onClick={onClose} sx={{ alignSelf: 'flex-end', margin: 1,color: "#579fba" }}>
        <ChevronRightIcon />
      </IconButton>
      </Tooltip>
      {user.id && <Tooltip title="Add Recipies " arrow>
      <ListItemButton component={Link} to={`Add/${user.id}`} sx={{'&:hover': {
    backgroundColor: '#ffcccb', // אדום בהיר
  },}}>
              <ListItemIcon sx={{color: "#579fba"}}><AddIcon/> </ListItemIcon>
              <ListItemText primary="Add" />
            </ListItemButton>
      </Tooltip>}
      <List>
        {recipesList.map((r) => (
          <ListItem key={r.title} disablePadding
          secondaryAction={user.id && r.authorId == user.id && (
            <Tooltip title="Delete Recipe" arrow>
                <IconButton
                    edge="end"
                    onClick={(e) => handleDeleteClick(e, r.id)}
                    sx={{ color: '#ED3D48' }}
                >
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        )} >
            <ListItemButton component={Link} to={`recipes/${r.id}`} sx={{'&:hover': {backgroundColor: '#ffcccb', 
  },}}>
              <ListItemIcon sx={{color: "#579fba"}}> <MenuBookIcon /></ListItemIcon>
              <ListItemText primary={r.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
    <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
        >
            <DialogTitle>אישור מחיקה</DialogTitle>
            <DialogContent>
                האם אתה בטוח שברצונך למחוק את המתכון?
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenDialog(false)}>ביטול</Button>
                <Button onClick={handleDelete} color="error" variant="contained">
                    מחק
                </Button>
            </DialogActions>
        </Dialog>
    </>
    )
}