import { Outlet } from "react-router"
import NavBar from "./NavBar"
import LogIn from "./UserPages/LogIn"
import { useContext } from "react"
import { userContext } from "../App"
import UpdateUser from "./UserPages/UpdateUser"
import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material"
import React from "react"
import Registration from "./UserPages/Registration"
import MailIcon from '@mui/icons-material/Mail';
import UserDetails from "./UserPages/UserDetails"


export default () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [user, userDispatch] = useContext(userContext)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };
const handleLogout=()=>{
    setIsLoggedIn(false);
    userDispatch({type:"Logout",data:user})
}
    return (
        <>
            <AppBar>

            <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <MailIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LR
                        </Typography>

                            
                       
                    <NavBar />
                    
   
                    
                        <MailIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                flexGrow: 1,
                                fontFamily: 'cursive',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LallyReecipies
                        </Typography>
                        
                    <Box sx={{ flexGrow: 0, display:'flex',}}>
                    {isLoggedIn ? <UpdateUser /> : <>
                        <LogIn OnLoginSuccess={handleLoginSuccess} />
                        <Registration />
                    </>}
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu}>
                                <UserDetails />
                            </IconButton>
                        </Tooltip>
                        <Menu open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography onClick={handleLogout}>Log Out</Typography>
                            </MenuItem>
                        </Menu>


                    </Box>
                </Toolbar>
            </Container>
        </AppBar >

<Outlet/>

        </>
    )


}