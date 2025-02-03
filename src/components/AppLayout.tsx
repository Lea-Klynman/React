import { Outlet } from "react-router"
import NavBar from "./NavBar"
import LogIn from "./UserPages/LogIn"
import { useContext } from "react"
import { UserContext} from "../App"
import UpdateUser from "./UserPages/UpdateUser"
import { AppBar, Box, Container, IconButton, Menu, MenuItem, Paper, Toolbar, Tooltip, Typography } from "@mui/material"
import React from "react"
import { Email, Facebook, Instagram, Phone, Spa, Twitter, WhatsApp, YouTube } from "@mui/icons-material";
import UserDetails from "./UserPages/UserDetails"


export default () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [user, userDispatch] = useContext(UserContext)
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
                        <Spa sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,color:"#ED3D48"}} />
                        <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu"
                            sx={{  mr: 2,  display: { xs: 'flex', md: 'none' },  fontFamily: 'monospace',
                                fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none',
                            }} > LR
                        </Typography>    
                    <NavBar />               
                        <Spa sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, flexGrow: 1, fontFamily: 'cursive', fontWeight: 700,
                                letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none',
                            }} > LallyReecipies
                        </Typography>
                        
                    <Box sx={{ flexGrow: 0, display:'flex',}}>
                    {isLoggedIn ? <UpdateUser /> : <>
                        <LogIn OnLoginSuccess={handleLoginSuccess} />
                    </>}
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu}>
                                <UserDetails />
                            </IconButton>
                        </Tooltip>
                        <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser}
                                anchorOrigin={{ vertical: 'top', horizontal: 'right',}}
                                keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right',}}
                                open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography onClick={handleLogout}>Log Out</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar > 
     
        <Box sx={{ minHeight: 'calc(100vh - 64px - 200px)', paddingTop: '50px', overflowX: 'hidden', width: '100%' ,paddingBottom:'20px'}}>
        <Outlet/>
            </Box>
            <Paper component="footer" sx={{  p: 1.5,  mt: 'auto',  backgroundColor: 'rgba(87, 159, 186, 0.8)',  bottom: 0,  width: '100%', overflowX: 'hidden', boxSizing: 'border-box' }}>
                 <Container maxWidth="lg" sx={{ overflowX: 'hidden' }}>
                     <Box sx={{  display: 'flex',  flexDirection: { xs: 'column', md: 'row' },  justifyContent: 'space-between',  alignItems: 'center',  py: 0.5, overflowX: 'hidden', width: '100%' }}>
                         <Box sx={{ display: 'flex', flexDirection: 'column', mb: { xs: 1, md: 0 } }}>
                            <Typography variant="h6" gutterBottom> Contact Us</Typography>
                            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                                <IconButton href="tel:+1234567890" color="inherit"> <Phone /> </IconButton>
                                <IconButton href="mailto:contact@example.com" color="inherit"> <Email /> </IconButton>
                                <IconButton href="https://wa.me/1234567890" target="_blank" color="inherit"> <WhatsApp /> </IconButton>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="h6" gutterBottom> Follow Us</Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <IconButton href="https://facebook.com" target="_blank" color="inherit"> <Facebook /> </IconButton>
                                <IconButton href="https://instagram.com" target="_blank" color="inherit"><Instagram /></IconButton>
                                <IconButton href="https://youtube.com" target="_blank" color="inherit"><YouTube /></IconButton>
                                <IconButton href="https://twitter.com" target="_blank" color="inherit"><Twitter /></IconButton>
                            </Box>
                        </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>© {new Date().getFullYear()} LallyReecipies. All rights reserved.</Typography>
                </Container>
            </Paper> 
        </>)}