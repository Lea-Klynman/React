import { useContext, useRef, useState } from "react"
import { Button,Grid2 as Grid,Modal,Box, TextField,
} from "@mui/material";
import { userContext } from "../../App";
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
    const context = useContext(userContext)
    if (!context) 
        throw new Error("");
    const [user,userDispatch]=context;
    const url = 'http://localhost:3000/api/user';
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            const mail = emailRef.current?.value;
            const password = passwordRef.current?.value
            const res = await axios.post(
                url + '/register',
                {
                    email: mail,
                    password: password
                },
            )
            userDispatch({
                type: 'Register',
                data: {
                    id: res.data.userId,
                    firstName: res.data.firstName || "",
                    lastName: res.data.lastName || "",
                    email: res.data.email || "",
                    password: res.data.password || "",
                    address: res.data.address || "",
                    phone: res.data.phone || ""
                }
            })
        } catch (e) {
            alert(e);
            if (e.status === 401)
                alert('user is already login')

        } finally {
            setOpen(false);
            emailRef.current!.value = '';
            passwordRef.current!.value = '';
        }
    }
    const handleSubmit = async (e: { preventDefault: () => void; }) => {    
        e.preventDefault()
        const mail = emailRef.current?.value;
        const password = passwordRef.current?.value
        try {
            const res = await axios.post(
                url + '/login',
                {
                    email: mail,
                    password: password
                },
            )
            userDispatch({
                type: 'Log in',
                data: {
                    id: res.data.user.id,
                    firstName: res.data.firstName || "",
                    lastName: res.data.lastName || "",
                    email: res.data.email || "",
                    password: res.data.password || "",
                    address: res.data.address || "",
                    phone: res.data.phone || ""
                }
            })
        } catch (e) {
            alert(e);
            if (e.status === 401)
                alert('user is already login')
        } finally {
            setOpen(false);
        }
    }
    return (<>
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
                </Box></Modal> </>)}
export default LogIn