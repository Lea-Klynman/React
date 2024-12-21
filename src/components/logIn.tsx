import { useContext, useRef, useState } from "react"
import {
    Button,
    Grid2 as Grid,
    Modal,
    Box,
    TextField
} from "@mui/material";
import { userCotext } from "../App";
import HomePage from "./HomePage";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const LogIn =()=> {
    const [isLogin, setIsLogin] = useState(false)
    const [open, setOpen] = useState(false)
 const [user,userDispatch]=useContext(userCotext)
 const nameRef=useRef<HTMLInputElement>(null)
 const emailRef=useRef<HTMLInputElement>(null)
 const handleSubmit=(e: { preventDefault: ()=>void; })=>{
    e.preventDefault()
    console.log(nameRef.current);
    console.log(emailRef.current);
    
    userDispatch({
        type:'Log in',
        data:{
            name:nameRef.current?.value || '',
            email:emailRef.current?.value||'',
            lastName:'',
            address:'',
            numberPhone:'',
            password:''
        }
    })
    setOpen(false); setIsLogin(true)
 }
    return (
        <>
       
            <Grid container>
                <Grid size={4}>
                    {!isLogin ?
                        <Button color="primary" variant="contained" onClick={() => setOpen(!open)}>Login</Button> :
                        <HomePage/>}
                </Grid>
            </Grid>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                    <TextField label='userName' inputRef={nameRef}/>
                    <br/>
                    <TextField label='userEmail' inputRef={emailRef}/>
                    <Button type="submit">Login</Button>
                    </form>
                    
                </Box>
            </Modal>

        </>
    )

}

export default LogIn