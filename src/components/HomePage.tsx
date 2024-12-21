import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { useContext, useRef, useState } from 'react';
import { userCotext } from '../App';
import { Box, Button, Grid2 as Grid, Modal, TextField, } from '@mui/material';
import { RouterProvider } from 'react-router';
import { router } from '../router';

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
const HomePage = () => {
    const [user, userDispatch] = useContext(userCotext)
    const [isUpdate, setIsUpdate] = useState(false)
    const nameRef = useRef<string>(user.name)
    const emailRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const numberPhoneRef = useRef<HTMLInputElement>(null)
    function stringAvatar(name: string) {
        if(name==undefined){
            name = ' ';
        }
        return {
            sx: {
                bgcolor: deepOrange[500],
            },
            children: `${name.split(' ')[0][0]}`,
        };
    }
    console.log(user.name);
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log(nameRef.current);
        console.log(emailRef.current);

        userDispatch({
            type: 'Update',
            data: {
                name: nameRef.current?.valueOf() || user.name,
                email: emailRef.current?.value || user.email,
                lastName: lastNameRef.current?.value || user.lastName,
                address: addressRef.current?.value || user.address,
                numberPhone: numberPhoneRef.current?.value || user.numberPhone,
                password: passwordRef.current?.value || user.password
            }
        })
        console.log(user);
        
        setIsUpdate(false)

    }

    return <>

        <Stack direction="row" spacing={2}>

            <Avatar {...stringAvatar(user.name)} />
            <h4>{user.name}</h4>


        </Stack>
        <Stack direction="row" spacing={4}>
        <RouterProvider router={router} />
        </Stack>
        


        <Grid container>
            <Grid size={4}>
                <Button color="primary" variant="contained" onClick={() => setIsUpdate(!isUpdate)}>Update</Button>
            </Grid>
        </Grid>
        <Modal open={isUpdate} onClose={() => setIsUpdate(false)}>
            <Box sx={style}>
                <form onSubmit={handleSubmit}>
                    <TextField label='userName' inputRef={nameRef} placeholder= {user.name} />
                    <TextField label='userLastName' inputRef={lastNameRef}  />
                    <br />
                    <TextField label='userEmail' inputRef={emailRef} />
                    <TextField label='useraddress' inputRef={addressRef} />
                    <TextField label='usernumberPhone' inputRef={numberPhoneRef} />
                    <TextField label='userPassword' inputRef={passwordRef} />
                    <Button type="submit">Save changes</Button>
                </form>

            </Box>
        </Modal>
    </>
}
export default HomePage