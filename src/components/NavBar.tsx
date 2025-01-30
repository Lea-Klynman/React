import { useContext } from "react"
import { Link } from "react-router"
import { userContext } from "../App"
import { Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import MenuIcon from '@mui/material/IconButton';
import React from "react";

const NavBar=() => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (<>
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
    <Menu 
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                 open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
        <MenuItem onClick={handleCloseNavMenu}>
            <Typography component={Link} to='/about'>about</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMenu}>
            <Typography component={Link} to='/'>Home</Typography>
        </MenuItem>
    </Menu>
</Box>
<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    <Button sx={{color:"#FFFFFF"}}component={Link} to='/about'>ABOUT</Button>
    <Button sx={{color:"#FFFFFF"}} component={Link} to='/home'>HOME</Button>
</Box>
   
    </>) 
}
export default NavBar
