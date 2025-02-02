import { useContext, useRef, useState } from 'react';
import { UserContext} from '../../App';
import { Alert, Box, Button, Grid2 as Grid, Modal, TextField, } from '@mui/material';
import axios, { AxiosError } from 'axios';

const style = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4,};
const alertStyle = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 2, outline: 'none',};
const UpdateUser = () => {
    const [user, userDispatch] = useContext(UserContext)
    const [isUpdate, setIsUpdate] = useState(false)
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    const numberPhoneRef = useRef<HTMLInputElement>(null)
    const url = 'http://localhost:3000/api/user';
    const [alertInfo, setAlertInfo] = useState<{ severity: 'success' | 'error' | 'warning' | 'info', message: string } | null>(null);
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        user.firstName= nameRef.current?.value || user.firstName;
        user.email= emailRef.current?.value || user.email;
        user.lastName= lastNameRef.current?.value || user.lastName;
        user.address= addressRef.current?.value || user.address;
        user.phone= numberPhoneRef.current?.value || user.phone;
        try{
            const res = await axios.put(url, {
                 firstName: user.firstName,
                  lastName: user.lastName, 
                  email: user.email, 
                  address: user.address, 
                  phone: user.phone },
                 { headers: { 'user-id': user.id  } });              
                 userDispatch({
                type: 'Update',  
                data: {...res.data.updatedUser}   
            })
            }
        catch (e: AxiosError | any) {
            if (e.response?.status === 404) {
                setAlertInfo({ severity: 'warning', message: 'User not found' });
            } else {
                setAlertInfo({ severity: 'error', message: 'An unexpected error occurred. Please try again later.' });
                console.error('Register error:', e);
            }
        }
        finally{ setIsUpdate(false) }
    }

    return <>
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
                <Button color="primary" variant="contained" onClick={() => setIsUpdate(!isUpdate)}>Update</Button>
           
            </Grid>
        </Grid>
        <Modal open={isUpdate} onClose={() => setIsUpdate(false)}>
            <Box sx={style}>
                <form onSubmit={handleSubmit}>
                    <TextField label='userName' inputRef={nameRef} placeholder= {user.firstName} />
                    <TextField label='userLastName' inputRef={lastNameRef}  />
                    <br />
                    <TextField label='userEmail' inputRef={emailRef} />
                    <TextField label='useraddress' inputRef={addressRef} />
                    <TextField label='usernumberPhone' inputRef={numberPhoneRef} />
                    <Button type="submit">Save changes</Button>
                </form>

            </Box>
        </Modal>
    </>
}
export default UpdateUser