import RecipesList from "./RecipesPage/RecipesList"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Outlet } from "react-router";
import { Tooltip } from "@mui/material";
const drawerWidth = 240;  
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: open ? drawerWidth : 0,
  width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
  maxWidth: '100vw',
  display: 'flex',
  justifyContent: open ? 'flex-start' : 'center',
  alignItems: 'center',
  overflowX: 'hidden'
}));
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));
const ShowRecipe=()=>{
    const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' , overflowX: 'hidden', maxWidth: '100vw' , position: 'relative'}}>
      
          <Tooltip title="Open Recipies List" arrow>
          <IconButton sx={{ color: "#579fba", position: "absolute",  right: 0, width: 30, top:300 }}  onClick={handleDrawerToggle}>
            <MoreVertIcon sx={{ fontSize: 80 }}/>
          </IconButton>
          </Tooltip>
       
      <Box sx={{ display: 'flex', marginTop: '5px', width: '100%', overflowX: 'hidden' }}>
      {open && <RecipesList open={open} onClose={handleDrawerToggle} />}
      <Main open={open}>
        <DrawerHeader />
        <Typography sx={{ width: '100%' }}>
          <Outlet/>
        </Typography>
      </Main>
    </Box>
    </Box>
    
  );
}
export default ShowRecipe