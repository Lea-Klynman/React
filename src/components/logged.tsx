import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { useContext, useRef, useState } from 'react';
import { userCotext } from '../App';
import { Box, Button, Grid2 as Grid, Modal, TextField, } from '@mui/material';

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
const Logged = () => {
    const [user, userDispatch] = useContext(userCotext)
    const [isUpdate, setIsUpdate] = useState(false)
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const numberPhoneRef = useRef<HTMLInputElement>(null)
    function stringAvatar(name: string) {
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
                name: nameRef.current?.value || user.name,
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

        <Grid container>
            <Grid size={4}>
                <Button color="primary" variant="contained" onClick={() => setIsUpdate(!isUpdate)}>Update</Button>
            </Grid>
        </Grid>
        <Modal open={isUpdate} onClose={() => setIsUpdate(false)}>
            <Box sx={style}>
                <form onSubmit={handleSubmit}>
                    <TextField label='userName' inputRef={nameRef} />
                    <TextField label='userLastName' inputRef={lastNameRef} />
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
export default Logged