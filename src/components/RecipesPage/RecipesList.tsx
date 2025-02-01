import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootStore } from "./store"
import { useContext, useEffect } from "react"
import { fetchRecipes } from "./recipesSlice"
import { Link } from "react-router"
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddIcon from '@mui/icons-material/Add';import { Tooltip } from "@mui/material"
import { userContext } from "../../App"

const drawerWidth = 240;

const StyledListItemButton = styled(ListItemButton)({
  '&:hover': {
    backgroundColor: '#ffcccb', // אדום בהיר
  },
});

export default ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    const dispatch = useDispatch<AppDispatch>()
    const recipesList = useSelector((state: RootStore) => state.recipes.recipes)
    useEffect(() => { dispatch(fetchRecipes()); }, [dispatch])
    useEffect(()=>{},recipesList)
       const [user, userDispatch] = useContext(userContext)
  
   return (<>
        <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: drawerWidth },
      }}
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
      <StyledListItemButton component={Link} to={`Add/${user.id}`}>
              <ListItemIcon sx={{color: "#579fba"}}><AddIcon/> </ListItemIcon>
              <ListItemText primary="Add" />
            </StyledListItemButton>
      </Tooltip>}
      <List>
        {recipesList.map((r) => (
          <ListItem key={r.title} disablePadding>
            <StyledListItemButton component={Link} to={`recipes/${r.id}`}>
              <ListItemIcon sx={{color: "#579fba"}}> <MenuBookIcon /></ListItemIcon>
              <ListItemText primary={r.title} />
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
    </>)
}