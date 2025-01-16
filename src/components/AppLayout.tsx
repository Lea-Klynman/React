import { Outlet } from "react-router"
import NavBar from "./NavBar"
import LogIn from "./logIn"
import { useContext } from "react"
import { userContext } from "../App"
import HomePage from "./HomePage"

export default () =>{
    const [user, userDispatch] = useContext(userContext)

    return (
        <>
<header>
<LogIn/>
<NavBar/>
<div className="avtar"><HomePage/></div>

</header>
<main>
<Outlet />
</main>
<footer></footer>
        </>
    )
    
    
}