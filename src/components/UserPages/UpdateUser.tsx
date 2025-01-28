import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { useContext, useRef, useState } from 'react';
import { userContext } from '../../App';
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
const UpdateUser = () => {
    const [user, userDispatch] = useContext(userContext)
    const [isUpdate, setIsUpdate] = useState(false)
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    const numberPhoneRef = useRef<HTMLInputElement>(null)
    const url = 'http://localhost:3000/api/user';
console.log(user);

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
        debugger;
        console.log(nameRef.current);
        console.log(emailRef.current);
        user.firstName= nameRef.current?.value || user.firstName;
        user.email= emailRef.current?.value || user.email;
        user.lastName= lastNameRef.current?.value || user.lastName;
        user.address= addressRef.current?.value || user.address;
        user.phone= numberPhoneRef.current?.value || user.phone;
        try{
            const res = await axios.put('http://localhost:3001/api/user/', {
                
                   firstName: user.firstName,
                     lastName: user.lastName, 
                     email: user.email,
                      address: user.address,
                       phone: user.phone}
           , {
                headers: {
                    'user-id': user.id,
                    
                }
            });
              userDispatch({
                type: 'Update',
               
                data: {...res.data.updatedUser}
                
                
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

            <Avatar {...stringAvatar(user.firstName)} />
            <h4>{user.firstName}</h4>


        </Stack>
        
        


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