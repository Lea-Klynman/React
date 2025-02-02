import { useContext, useRef, useState } from "react"
import {
    Button, Grid2 as Grid, Modal, Box, TextField, Stack, Alert,
} from "@mui/material";
import { UserContext } from "../../App";
import axios, { AxiosError } from "axios";
const style = { position: 'absolute', top: '50%',left: '50%',transform: 'translate(-50%, -50%)',
    width: 400, bgcolor: 'background.paper',border: '2px solid #000',boxShadow: 24,p: 4,
};
const alertStyle = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 2, outline: 'none',};
const LogIn = ({ OnLoginSuccess }: { OnLoginSuccess: Function }) => {
    const [open, setOpen] = useState(false)
    const [user, userDispatch] = useContext(UserContext)
    const url = 'http://localhost:3000/api/user';
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const [alertInfo, setAlertInfo] = useState<{ severity: 'success' | 'error' | 'warning' | 'info', message: string } | null>(null);
    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            const mail = emailRef.current?.value;
            const password = passwordRef.current?.value
            const res = await axios.post( url + '/register', { email: mail, password: password}, )
            userDispatch({
                type: 'Register',
                data: {
                    id: res.data.userId,
                    firstName: res.data.firstName || "",
                    lastName: res.data.lastName || "",
                    email: mail || "",
                    password: password || "",
                    address: res.data.address || "",
                    phone: res.data.phone || ""
                }})
            OnLoginSuccess();
            setAlertInfo({ severity: 'success', message: 'Successfully logged in!' });
        } catch (e: AxiosError | any) {
            if (e.response?.status === 400) {
                setAlertInfo({ severity: 'warning', message: 'User already exists. Please choose a different email address.' });
            } else {
                setAlertInfo({ severity: 'error', message: 'An unexpected error occurred. Please try again later.' });
                console.error('Register error:', e);
            }
        } finally {
            setOpen(false);
        } }
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const mail = emailRef.current?.value;
        const password = passwordRef.current?.value
        try {
            const res = await axios.post(url + '/login', { email: mail, password: password },)
            userDispatch({
                type: 'Log in',
                data: {
                    ...user, ...res.data.user
                } })
            OnLoginSuccess();
            setAlertInfo({ severity: 'success', message: 'Successfully logged in!' });
        } catch (e: AxiosError | any) {
            if (e.response?.status === 401) {
                setAlertInfo({ severity: 'error', message: 'Invalid credentials' });
            } else {
                setAlertInfo({ severity: 'error', message: 'An unexpected error occurred. Please try again later.' });
                console.error('Login error:', e);
            }
        } finally {
            setOpen(false);
        }
    }
    return (<>
         <Modal 
            open={!!alertInfo} 
            onClose={() => setAlertInfo(null)} >
            <Box sx={alertStyle}>
                {alertInfo && (
                    <Alert  severity={alertInfo.severity}  onClose={() => setAlertInfo(null)} sx={{ width: '100%' }}> {alertInfo.message}
                    </Alert>)}
            </Box>
        </Modal>
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
            </Box></Modal> </>)
}
export default LogIn