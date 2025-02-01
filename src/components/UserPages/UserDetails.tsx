import { useContext } from "react";
import { Avatar, Stack } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { userContext } from "../../App";

const UserDetails = () => {
    const [user, userDispatch] = useContext(userContext)
    
    
    function stringAvatar(name: string) {
        if (name == undefined) {
            name = ' ';
        }
        return {
            sx: {
                bgcolor: "#FFFFFF",
                color:"#ED3D48"
            },
            children: `${name.split(' ')[0][0]}`,
        };
    }
    
    return (

        <Stack direction="row" spacing={2}>
            {!user.firstName || user.firstName.trim() === ''?(<> <PersonIcon/></>):(<>
            <Avatar {...stringAvatar(user.firstName)} />
            </>)}
           
        </Stack>
    );
}
export default UserDetails