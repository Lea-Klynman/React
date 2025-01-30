import { Outlet } from "react-router"
import NavBar from "./NavBar"
import LogIn from "./UserPages/LogIn"
import { useContext } from "react"
import { userContext } from "../App"
import UpdateUser from "./UserPages/UpdateUser"
import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material"
import React from "react"
import Registration from "./UserPages/Registration"
import UserDetails from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';


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
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            L
                        </Typography>

                            
                       
                    <NavBar />
                    
                    {isLoggedIn ? <UpdateUser /> : <>
                        <LogIn OnLoginSuccess={handleLoginSuccess} />
                        <Registration />
                    </>}
                    
                        <MailIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu}>
                                <UserDetails />
                            </IconButton>
                        </Tooltip>
                        <Menu open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography>Log Out</Typography>
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