import { Outlet } from "react-router"
import NavBar from "./NavBar"
import LogIn from "./UserPages/LogIn"
import { useContext } from "react"
import { userContext } from "../App"
import UpdateUser from "./UserPages/UpdateUser"

export default () =>{
    const [user, userDispatch] = useContext(userContext)

    return (
        <>
<header>
<LogIn/>
<NavBar/>
<div className="avtar"><UpdateUser/></div>

</header>
<main>
<Outlet />
</main>
<footer></footer>
        </>
    )
    
    
}