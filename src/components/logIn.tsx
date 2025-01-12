import {  useContext, useRef, useState } from "react"
import {
    Button,
    Grid2 as Grid,
    Modal,
    Box,
    TextField,
} from "@mui/material";
import { userCotext } from "../App";




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
 
 const emailRef=useRef<HTMLInputElement>(null)
 const passwordRef=useRef<HTMLInputElement>(null)
 const handleRegister=(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    console.log(passwordRef.current);
   console.log(emailRef.current);
    
    userDispatch({
        type:'Register',
        data:{
            userId:0,
            name:'',
            email:emailRef.current?.value||'',
            lastName:'',
            address:'',
            numberPhone:'',
            password:passwordRef.current?.value || ''
        }
    })
    setOpen(false); setIsLogin(true)
 }
 const handleSubmit=(e: { preventDefault: ()=>void; })=>{
    e.preventDefault()
    console.log(passwordRef.current);
    console.log(emailRef.current);
    
    userDispatch({
        type:'Log in',
        data:{
            userId:0,
            name:'',
            email:emailRef.current?.value||'',
            lastName:'',
            address:'',
            numberPhone:'',
            password:passwordRef.current?.value || ''
        }
    })
    setOpen(false); setIsLogin(true)
 }
    return (
        <>
       
            <Grid container>
                <Grid size={4}>
                   
                        <Button color="primary" variant="contained" onClick={() => setOpen(!open)}>Login</Button> 
                        
                </Grid>
            </Grid>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                    <TextField label='userEmail' inputRef={emailRef}/>

                    <br/>
                    <TextField type="password" label='password' inputRef={passwordRef}/>

                    <Button type="submit">Login</Button>
                    <p>don't have an account?</p>
                    <Button type="button" onClick={handleRegister}>Sing up</Button>

                    </form>
                    
                </Box>
            </Modal>

        </>
    )

}

export default LogIn