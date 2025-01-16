import { useContext, useRef, useState } from "react"
import {
    Button,
    Grid2 as Grid,
    Modal,
    Box,
    TextField,
} from "@mui/material";
import { userContext } from "../App";
import axios, { AxiosError } from "axios";




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

const LogIn = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [open, setOpen] = useState(false)
    const [user, userDispatch] = useContext(userContext)
    const url = 'http://localhost:3000/api/user';
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(passwordRef.current);
        console.log(emailRef.current);
        try {

            const res = await axios.post(//1
                url + '/register',
                {//2 + 3
                    email: emailRef.current?.value,
                    password: passwordRef.current?.value

                },
            )
            user.userId = res.data.user.id;//5
            userDispatch({
                type: 'Register',
                data: {...user}
            })


        } catch (e) {
            alert(e);
            //axios: //4
            if (e.status === 401)
                alert('user is already login')

        } finally {
            setOpen(false); 
            emailRef.current!.value='';
             passwordRef.current!.value='';
        }


    }
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log(passwordRef.current);
        console.log(emailRef.current);
        try {
            
            const res = await axios.post(//1
                url + '/login',
                {//2 + 3
                    email: emailRef.current?.value,
                    password: passwordRef.current?.value
                   
                },
            )
    
            user.userId=res.data.user.id;//5
            userDispatch({
                type: 'Log in',
                data: user
                  
            })
    
        } catch (e) {
            alert(e);
            //axios: //4
            if (e.status === 401)
                alert('user is already login')
    
        } finally {
            setOpen(false);
            emailRef.current!.value='';
             passwordRef.current!.value='';
        }
        
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
                        <TextField label='userEmail' inputRef={emailRef} />

                        <br />
                        <TextField type="password" label='password' inputRef={passwordRef} />

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