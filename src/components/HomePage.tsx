import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { useContext, useRef, useState } from 'react';
import { userContext } from '../App';
import { Box, Button, Grid2 as Grid, Modal, TextField, } from '@mui/material';
import axios from 'axios';

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
    const [user, userDispatch] = useContext(userContext)
    const [isUpdate, setIsUpdate] = useState(false)
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    const numberPhoneRef = useRef<HTMLInputElement>(null)
    const url = 'http://localhost:3000/api/user';

    function stringAvatar(name: string = " ") {
        return {
          sx: {
            bgcolor: deepOrange[500],
          },
          children: name.trim() ? name[0].toUpperCase() : "?",
        };
      }
    
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log(nameRef.current);
        console.log(emailRef.current);
        user.name= nameRef.current?.value || user.name;
        user.email= emailRef.current?.value || user.email;
        user.lastName= lastNameRef.current?.value || user.lastName;
        user.address= addressRef.current?.value || user.address;
        user.numberPhone= numberPhoneRef.current?.value || user.numberPhone;
        try{
        const res = await axios.post(//1
            url,
            user,
            {
              headers: {
                'user-id': `${user.userId}`
              }      });
              userDispatch({
                type: 'Update',
               
                data: {...res.data}
                
                
            })
            }
            
        catch (e) {
          alert("error");
          
        }
        finally
        {
            setIsUpdate(false)
        }
        
        console.log(user);
        

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
                    <TextField label='userName' inputRef={nameRef} placeholder= {user.name} />
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
export default HomePage